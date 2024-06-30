import { useEffect } from "react";

export default function ChatButton() {
  // 动态加载 Voiceflow 脚本
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
    script.type = "text/javascript";
    script.onload = () => {
      window.voiceflow.chat.load({
        verify: { projectID: "65a01bb6521a928d0c141624" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
      });
    };

    script.style += "chat-bot";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 仅保留Voiceflow脚本加载逻辑，没有UI元素
  return null;
}
