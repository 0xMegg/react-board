import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MousePointerClick } from "lucide-react";

function HotTopicCard() {
  return (
    <>
      <div className="flex flex-col gap-3 ">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src=""
            alt=""
            className="w-[232px] min-w-[232px] h-[288px] min-h-[288px]"
          />
          <div className="flex items-end gap-2 absolute bottom-2 left-2 right-2">
            <p className="h-[84px] line-clamp-3 text-xl font-semibold">
              개발자도 브랜딩을 해야할까? 답은 YES! 개발자도 브랜딩을 해야할까?
              답은 YES!
            </p>
            <Button variant="secondary">
              <MousePointerClick />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-neutral-500 text-xs">
              IT 및 기술 분야 · 소프트웨어 엔지니어
            </span>
            <span>개발자 9Diin</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotTopicCard;
