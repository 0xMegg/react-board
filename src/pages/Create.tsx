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
import type { SerializedEditorState } from "lexical";
import { Editor } from "@/components/blocks/editor-00";
import { useState } from "react";

const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Hello World 🚀",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState;

function CreatePage() {
  const [editorState, setEditorState] =
    useState<SerializedEditorState>(initialValue);
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
              <Button size="icon">
                <ArrowLeft />
              </Button>
              <Button>임시 저장</Button>
              <Button>
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
          <div>
            <Editor
              editorSerializedState={editorState}
              onSerializedChange={(value) => setEditorState(value)}
            />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default CreatePage;
