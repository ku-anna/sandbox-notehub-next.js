// app/lib/stores/noteStore.ts

import { create } from "zustand";
// 1. Імпортуємо функцію
import { persist } from "zustand/middleware";
import { NewNoteData } from "../api";

type NoteDraftStore = {
  draft: NewNoteData;
  setDraft: (note: NewNoteData) => void;
  clearDraft: () => void;
};

const initialDraft: NewNoteData = {
  title: "",
  content: "",
  categoryId: "",
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  // 2. Обгортаємо функцію створення стора
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      // Ключ у localStorage
      name: "note-draft",
      // Зберігаємо лише властивість draft
      partialize: (state) => ({ draft: state.draft }),
    }
  )
);
// Що тут відбувається:
// persist – обгортає створення стора.
// name: 'note-draft' – це ключ, під яким буде зберігатися стан у localStorage.
// partialize – вказує, що ми хочемо зберігати лише draft, без функцій setDraft і clearDraft.
