import AppHeader from "@/components/common/AppHeader";
import AppFooter from "@/components/common/AppFooter";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Asterisk, Image, ImageOff, Rocket } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { TextEditor } from "@/components/ui/text-editor";

function CreatePage() {
  return (
    <div className="page">
      <AppHeader />
      <div className="container py-6 flex flex-col gap-6">
        <Input
          placeholder="토픽 제목을 입력해주세요."
          maxLength={50}
          className="h-14 px-4 test-base border-none font-semibold md:h-20 md:text-xl md:px-6 md:placeholder:font-semibold"
        />
        <Separator />
        <div className="flex items-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Button size="icon" variant="outline">
                <ArrowLeft />
              </Button>
              <Button variant="outline">임시 저장</Button>
              <Button variant="destructive">
                <Rocket />
                토픽 발행하기
              </Button>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Asterisk />
                카테고리
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="주제 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    {/* {TOPIC_CATEGORY.map((category) => {
                      return (
                        <SelectItem key={category.id} value={category.category}>
                          {category.label}
                        </SelectItem>
                      );
                    })} */}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Asterisk />
                <p>썸네일</p>
              </div>
              <div className="relative">
                <Skeleton className="w-full aspect-video" />
                <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <div>
                <Separator className="mb-2 -mt-1" />
                <Button variant="outline" className="w-full">
                  <ImageOff />
                  썸네일 제거
                </Button>
              </div>
            </div>
          </div>
          {/* 텍스트 에디터 영역 */}
          <div className="flex-1 ml-6">
            <TextEditor
              placeholder="토픽 내용을 작성해주세요..."
              className="min-h-[500px]"
            />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default CreatePage;
