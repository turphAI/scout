'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mic, ArrowUp, X } from 'lucide-react';

type SuggestionItem = {
  id: string;
  label: string;
};

type ActionItem = {
  id: string;
  label: string;
  onClick?: (currentValue: string) => void;
  variant?: 'primary' | 'secondary';
};

type AsInputProps = {
  placeholder?: string;
  onSubmit?: (value: string) => void;
  suggestions?: SuggestionItem[];
  enableDropdown?: boolean;
  showActions?: boolean;
  actions?: ActionItem[];
  contextSlot?: React.ReactNode;
  showVoiceIcon?: boolean;
  showClearIcon?: boolean;
};

export default function AsInput({ placeholder = 'Type here...', onSubmit, suggestions = [], enableDropdown = true, showActions = true, actions = [], contextSlot, showVoiceIcon = false, showClearIcon = true }: AsInputProps) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [ghostText, setGhostText] = useState<string>('');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [filtered, setFiltered] = useState<SuggestionItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [currentValue, setCurrentValue] = useState<string>('');

  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    // Ensure element is focusable
    el.setAttribute('role', 'combobox');
    el.setAttribute('aria-expanded', 'false');
    el.setAttribute('aria-autocomplete', 'both');
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const getText = () => editorRef.current?.innerText ?? '';

  const setText = (value: string) => {
    if (!editorRef.current) return;
    editorRef.current.innerText = value;
    setCurrentValue(value);
  };

  const clearText = () => setText('');

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (enableDropdown && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      if (filtered.length === 0) return;
      setIsOpen(true);
      setActiveIndex((prev) => {
        const next = e.key === 'ArrowDown' ? (prev + 1) % filtered.length : (prev - 1 + filtered.length) % filtered.length;
        return next;
      });
      return;
    }

    if (enableDropdown && e.key === 'Enter' && isOpen && activeIndex >= 0) {
      e.preventDefault();
      const sel = filtered[activeIndex];
      if (sel) {
        setText(sel.label);
        setIsOpen(false);
        setActiveIndex(-1);
        onSubmit?.(sel.label);
        return;
      }
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      const value = getText().trim();
      if (value.length > 0) {
        onSubmit?.(value);
        // Prototype-specific: if "RMD" is entered, navigate to RMD results within smartSuggest
        if (/^rmd$/i.test(value)) {
          router.push('/smartSuggest/rmd');
          return;
        }
      }
    }
    if ((e.key === 'Tab' || (e.key === 'ArrowRight' && (getText() + ghostText).includes(getText()))) && ghostText) {
      e.preventDefault();
      setText(getText() + ghostText);
      setGhostText('');
    }
    if (e.key === 'Escape') {
      setGhostText('');
      setIsOpen(false);
    }
  };

  const handleInput: React.FormEventHandler<HTMLDivElement> = () => {
    const value = getText();
    setCurrentValue(value);
    // Very simple demo suggestions
    if (/^rmd?$/i.test(value)) {
      setGhostText(' 2025 requirements');
    } else if (/^aap?$/i.test(value)) {
      setGhostText('L stock price');
    } else if (/^\/$/.test(value)) {
      setGhostText('quote TSLA');
    } else {
      setGhostText('');
    }

    if (enableDropdown) {
      const v = value.trim().toLowerCase();
      const next = v.length === 0
        ? suggestions.slice(0, 5)
        : suggestions.filter(s => s.label.toLowerCase().includes(v)).slice(0, 8);
      setFiltered(next);
      setIsOpen(next.length > 0 && (isFocused || document.activeElement === editorRef.current));
      setActiveIndex(next.length > 0 ? 0 : -1);
    }
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      <div className="relative">
        <div 
          ref={editorRef}
          className={`min-h-[44px] px-3 py-2 rounded-md border text-sm outline-none bg-white ${isFocused ? 'ring-2 ring-blue-500 border-blue-500' : 'border-zinc-300'}`}
          contentEditable
          suppressContentEditableWarning
          aria-placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
        />
        {/* Placeholder overlay inside the input area */}
        {!getText() && !isFocused && (
          <div className="absolute inset-0 flex items-center pointer-events-none select-none px-3 py-2 text-sm text-zinc-400">
            {placeholder}
          </div>
        )}
        {/* Ghost text overlay disabled for now to avoid overlap artefacts */}
      </div>

      {enableDropdown && isOpen && filtered.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-50">
          <ul className="max-h-64 overflow-auto py-1">
            {filtered.map((s, idx) => (
              <li
                key={s.id}
                className={`px-3 py-2 text-sm cursor-pointer ${idx === activeIndex ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setText(s.label);
                  setIsOpen(false);
                  setActiveIndex(-1);
                  onSubmit?.(s.label);
                }}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {s.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {showActions && (
        <div className="mt-3 w-full">
          {/* Container slots: left context, right mode icons */}
          <div className="flex items-center justify-between w-full">
            {/* Context (left) */}
            <div className="min-h-[32px] flex items-center gap-2 text-sm text-zinc-600">
              {actions.length > 0
                ? actions.map(action => (
                    <button
                      key={action.id}
                      type="button"
                      onClick={() => action.onClick?.(getText())}
                      className={
                        action.variant === 'primary'
                          ? 'px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700'
                          : 'px-3 py-1.5 rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-50'
                      }
                    >
                      {action.label}
                    </button>
                  ))
                : contextSlot}
            </div>

            {/* Mode icons (right) */}
            <div className="flex items-center gap-2">
              {currentValue.trim().length === 0 ? (
                <>
                  {showVoiceIcon && (
                    <button
                      type="button"
                      aria-label="Voice input"
                      className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700"
                    >
                      <Mic className="w-4 h-4" />
                    </button>
                  )}
                </>
              ) : (
                <>
                  {showClearIcon && (
                    <button
                      type="button"
                      aria-label="Clear"
                      onClick={() => clearText()}
                      className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                  <button
                    type="button"
                    aria-label="Submit"
                    onClick={() => onSubmit?.(getText())}
                    className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


