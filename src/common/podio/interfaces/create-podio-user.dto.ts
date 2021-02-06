import { SignUpFieldsGTa, SignUpFieldsGTe, SignUpFieldsGV } from '../constants';

type PodioRecord<T extends string> = Record<T, string | number>;

export interface CreatePodioUserDto {
  external_id: string;
  fields:
    | PodioRecord<SignUpFieldsGV>
    | PodioRecord<SignUpFieldsGTa>
    | PodioRecord<SignUpFieldsGTe>;
}
