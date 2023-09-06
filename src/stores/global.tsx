import { TabType } from "src/constants/tab";
import { create } from "zustand";

interface ChatStoreProps {
  open: boolean;
  activeTab: null | TabType;
  toggleChat: () => void;
  changeActiveTab: (value: TabType) => void;
}

const IS_OPEN_CHAT = "isOpenChat";

const useChatStore = create<ChatStoreProps>((set) => ({
  open: Boolean(localStorage.getItem(IS_OPEN_CHAT)) ?? false,
  activeTab: null,
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
  changeActiveTab: (updateActiveTab) => set({ activeTab: updateActiveTab }),
}));

export default useChatStore;
