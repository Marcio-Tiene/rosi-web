export interface IPostLeadLover {
  Name?: string;
  Email?: string;
  MachineCode: number;
  EmailSequenceCode: number;
  SequenceLevelCode: number;
  Company?: string;
  Phone?: string;
  Score?: number;
  Tag?: string[];
  Source?: string;
  DynamicFields?: IDynamicFields[];
}

interface IDynamicFields {
  id: number;
  value: string;
}
