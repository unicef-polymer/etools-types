export interface IAttachment {
  id: number;
  filename: string;
  file_type: number;
  file: string | File | null;
  hyperlink: string;
  created: string;
  modified: string;
  uploaded_by: null;
}

export type ReviewAttachment = {
  active: boolean;
  attachment: string;
  attachment_document: string;
  attachment_file: string;
  created: string;
  id: number;
  intervention: number;
  type: number;
};
