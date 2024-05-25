import { Button as TButton } from "../api/button/Button";

export const BUTTON_TITLE_FIELD = "text";

export const ButtonTitle = (record: TButton): string => {
  return record.text?.toString() || String(record.id);
};
