"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `یابان هفت تیر -خیابان کریم خان - خیابان حسینی - ابتدای کوچ یابان هفت تیر -خیابان کریم خان - خیابان حسینی - ابتدای کوچ یابان هفت تیر -خیابان کریم خان - خیابان حسینی - ابتدای کوچ یابان هفت تیر -خیابان کریم خان - خیابان حسینی - ابتدای کوچ
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
