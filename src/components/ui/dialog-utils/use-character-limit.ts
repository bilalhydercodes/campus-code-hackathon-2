import { useState, useCallback, ChangeEvent } from "react";

export interface UseCharacterLimitOptions {
  maxLength: number;
  initialValue?: string;
}

export interface UseCharacterLimitReturn {
  value: string;
  characterCount: number;
  handleChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  maxLength: number;
}

export function useCharacterLimit({
  maxLength,
  initialValue = "",
}: UseCharacterLimitOptions): UseCharacterLimitReturn {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const nextValue = e.target.value;
      if (nextValue.length <= maxLength) {
        setValue(nextValue);
      }
    },
    [maxLength]
  );

  return {
    value,
    characterCount: value.length,
    handleChange,
    maxLength,
  };
}

export default useCharacterLimit;
