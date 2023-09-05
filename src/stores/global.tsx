import { create } from "zustand";

interface ChatStoreProps {
  open: boolean;
  toggleChat: () => void;
}

const useChatStore = create<ChatStoreProps>((set) => ({
  open: Boolean(localStorage.getItem("isOpenChat")) ?? false,
  toggleChat: () =>
    set((state) => {
      const updateOpenState = !state.open;
      localStorage.setItem("isOpenChat", updateOpenState.toString());
      return { open: updateOpenState };
    }),
}));

export default useChatStore;
