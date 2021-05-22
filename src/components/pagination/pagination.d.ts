interface IPagination {
  className?: string;
  total?: any;
  page?: number | string;
  onPaginate?: any;
  disabled?: boolean;
}
