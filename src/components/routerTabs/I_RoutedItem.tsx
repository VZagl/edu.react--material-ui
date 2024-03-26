export interface I_RoutedItem {
  label: string;
  pattern: string;
  to: string;
}

export type T_RoutedDataProps = { data: I_RoutedItem[] };
