import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ButtonWhereInput = {
  color?: "Option1";
  id?: StringFilter;
  text?: StringNullableFilter;
};
