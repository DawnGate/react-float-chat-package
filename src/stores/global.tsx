import { create } from "zustand";

interface ChatStoreProps {
  open: boolean;
  toggleChat: () => void;
}

const IS_OPEN_CHAT = "isOpenChat";

const useChatStore = create<ChatStoreProps>((set) => ({
  open: Boolean(localStorage.getItem(IS_OPEN_CHAT)) ?? false,
  toggleChat: () =>
    set((state) => {
      const updateOpenState = !state.open;
      if (updateOpenState) {
        localStorage.setItem(IS_OPEN_CHAT, updateOpenState.toString());
      } else {
        localStorage.removeItem(IS_OPEN_CHAT);
      }
      return { open: updateOpenState };
    }),
}));

export default useChatStore;
