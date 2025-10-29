export interface Mail {
  id: string;
  senderName: string;
  senderEmail: string;
  title: string;
  description: string;
  createdAt: string;
  isChecked: boolean | undefined;
  // predosly riadok mozem zapisat takto
  // isChecked?: boolean;
}
