import { Campus } from 'src/common/entities/campus';
import { Product } from 'src/common/entities/product';
import { University } from 'src/common/entities/university';

type AllocationSeed = {
  campusId?: Campus['id'];
  universityId?: University['id'];
  productMapping: Record<Product['shortName'], string>;
};

export const AllocationSeeds: AllocationSeed[] = [
  {
    universityId: '057a50e4-4e64-4169-a05d-42a1722de18c',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: '8bed939a-2ed8-4374-940e-b755f77d0a02',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: 'bc1513b2-9d44-4038-af44-3dab690b48eb',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: '8e8975da-7225-4f60-9645-f259778afd4e',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    campusId: '1f407577-8e96-46a7-853c-7a04a8819175',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: '7fd9b5e4-458b-4ce5-8867-2abeaa441794',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: '62ed87c3-da7c-439d-93e1-3c228d234523',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: '42e53b47-1d32-424c-b34d-d5f9087aff79',
    productMapping: { GV: 'Celaya', GTe: 'León', GTa: 'Celaya' },
  },
  {
    universityId: 'd68d9060-7113-4e82-94c9-6fa82185b597',
    productMapping: { GV: 'Chihuahua', GTe: 'UAEMEX', GTa: 'Ciudad Juárez' },
  },
  {
    campusId: '6df645b4-3b6e-40b0-9229-61e09199ee03',
    productMapping: { GV: 'Chihuahua', GTe: 'UAEMEX', GTa: 'Ciudad Juárez' },
  },
  {
    universityId: '8db37e7f-ba5e-4e5b-afd7-47ce9671379f',
    productMapping: { GV: 'Chihuahua', GTe: 'UAEMEX', GTa: 'Ciudad Juárez' },
  },
  {
    campusId: 'e5b261e7-7a0b-4dce-afbd-db8384699490',
    productMapping: { GV: 'Chihuahua', GTe: 'UAEMEX', GTa: 'Ciudad Juárez' },
  },
  {
    universityId: '71416bf2-7237-4007-b479-6355722f4e73',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    campusId: '46c0eeab-e60b-4a75-bd1d-39b56eb515b3',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    universityId: '30e3f871-0f3d-46fa-a76a-7ad5b2cf73bc',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    campusId: '4933dd3b-11db-430d-93e0-10b6eaa3b445',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    universityId: '8e53ae32-47a2-41cf-8042-38ae950296b6',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    universityId: '20ff19cf-c319-4834-a78d-f9aba7ddc914',
    productMapping: {
      GV: 'Ciudad Juárez',
      GTe: 'UAEMEX',
      GTa: 'Ciudad Juárez',
    },
  },
  {
    universityId: 'd33f711f-e919-40dd-af11-7bde1053afe6',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    universityId: '63af921c-ab7a-473f-a357-bac4307406fd',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    campusId: '38c95fb7-4a32-452a-ab39-4852948ba45c',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    campusId: '686fb2f1-b00d-49f1-bd33-4b11ca66e098',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    universityId: '22e111cf-d6df-4e6a-b9fb-e998d84bdbc7',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    universityId: 'cf1ab182-92c9-4989-9579-e861f8dde85c',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    campusId: 'bbdbae6a-34b9-4398-a54f-5b51c6260ac1',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    universityId: 'aa7a090a-1179-4f2e-9b6f-f551bfc0e4a6',
    productMapping: {
      GV: 'Ciudad Obregón',
      GTe: 'Querétaro',
      GTa: 'Ciudad Obregón',
    },
  },
  {
    universityId: 'fb7f6981-33e7-4924-aabc-ed3b3bc1098a',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    campusId: 'e596c5d9-f6fe-430a-ae8a-03904aa646ec',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    universityId: 'ca037900-3326-47a7-b27a-51cd832c1165',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    universityId: '678a40b4-779b-481d-8206-4cd7b66c3dd2',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    universityId: 'a93fc345-b12c-479f-8fb7-d8b572db8a91',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    campusId: 'ff3e8655-a71c-48f7-8f00-c1f600b7892b',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    campusId: '805723f1-0040-4967-82a8-fb5ee91aae6d',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    campusId: 'c645e96b-79a8-457f-ba7f-73d134a3c568',
    productMapping: { GV: 'Guadalajara', GTe: 'Querétaro', GTa: 'Guadalajara' },
  },
  {
    universityId: 'ebaea84c-ee27-44e2-98d0-307dfd3f2da0',
    productMapping: { GV: 'Guanajuato', GTe: 'León', GTa: 'Guanajuato' },
  },
  {
    universityId: '2ae3c58b-5021-47ff-9c61-705ecf67d6d8',
    productMapping: { GV: 'Guanajuato', GTe: 'León', GTa: 'Guanajuato' },
  },
  {
    universityId: 'ec3dc0a7-b96c-4996-931b-76add74de9f2',
    productMapping: { GV: 'Guanajuato', GTe: 'León', GTa: 'Guanajuato' },
  },
  {
    universityId: '869a00c8-94de-413e-8f0b-713bef529552',
    productMapping: { GV: 'Guanajuato', GTe: 'León', GTa: 'Guanajuato' },
  },
  {
    universityId: '33128d93-3734-4d87-987a-48d40c60d923',
    productMapping: { GV: 'Guanajuato', GTe: 'León', GTa: 'Guanajuato' },
  },
  {
    universityId: '53a01a4e-4bf4-4d45-a2e7-adbf28f243e2',
    productMapping: { GV: 'Guanajuato', GTe: 'León', GTa: 'Guanajuato' },
  },
  {
    campusId: '3f8cb71a-75d3-4368-8ae5-e28a8daa45da',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    campusId: '9379d762-50f9-4c68-a465-145d14da73b0',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    campusId: 'f3185489-5bbd-4f12-9c7e-01d864e07473',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    campusId: 'c1e2a6fa-4dd9-4679-b015-d82170ff4efc',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    universityId: 'd818fe76-ec01-4709-bb2b-cdc8dbf312b4',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    campusId: 'd6223a89-8fd3-421b-bfe7-16d367cdac27',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    universityId: 'cabe4059-fe50-4929-a598-1bf7243e90b9',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    universityId: 'f32cc634-9dd9-48ea-83cf-044ffede81d2',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    universityId: '83d85647-8fd1-4bea-baa5-7049eddd5807',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    campusId: '1ea60f80-6209-4bc4-8652-ea28811a5fa9',
    productMapping: { GV: 'IPN', GTe: 'UNAM', GTa: 'IPN' },
  },
  {
    universityId: '0d57d385-8bed-4a6c-9583-1443c3cd4da6',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    universityId: '363c64d0-5dc9-4486-a2c2-c612dac04fbe',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    universityId: 'de6c3da7-622e-4025-9673-cd45a04d40c2',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    campusId: '93995bd5-f588-4dfc-8f2b-3dc6f2e35a1c',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    campusId: 'e15ee886-5f01-454b-a8fc-c6900c9d6b01',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    campusId: 'e785454f-5bad-4932-85de-9f7909ad68fc',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    universityId: '207d3778-48d7-4ab0-89bd-9d18c38e3422',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    universityId: '40c82e88-103d-4c11-a3eb-80c7b4f20f06',
    productMapping: { GV: 'Irapuato', GTe: 'León', GTa: 'Irapuato' },
  },
  {
    universityId: '03ed1330-2c67-449d-ab20-acfe9c603ac4',
    productMapping: { GV: 'ITAM', GTe: 'UNAM', GTa: 'ITAM' },
  },
  {
    universityId: '9c59b090-d48d-443e-ad61-dc8bd0abde10',
    productMapping: { GV: 'ITAM', GTe: 'UNAM', GTa: 'ITAM' },
  },
  {
    universityId: '37cb991c-df42-4520-94a3-3a6a0a595fd4',
    productMapping: { GV: 'ITAM', GTe: 'UNAM', GTa: 'ITAM' },
  },
  {
    campusId: '8b8c8a81-042e-4579-a91a-fc4fbcbe3399',
    productMapping: { GV: 'ITAM', GTe: 'UNAM', GTa: 'ITAM' },
  },
  {
    campusId: '87f57c31-8639-4f87-95e2-36ace8515a5d',
    productMapping: { GV: 'ITAM', GTe: 'UNAM', GTa: 'ITAM' },
  },
  {
    universityId: '94ca7953-9ba3-4be2-ae37-027cc4f72fc0',
    productMapping: { GV: 'ITAM', GTe: 'UNAM', GTa: 'ITAM' },
  },
  {
    universityId: '48ba0a8e-4d08-4386-bdb6-22384e7a248c',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    campusId: '70bcd433-9663-4671-9ab0-76d53ea2b617',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    universityId: '0fe2123c-5584-4381-a8a9-beb5f610229a',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    universityId: '7f89e3fb-5877-4e8a-8072-fda557d7e61a',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    campusId: 'c533c051-8b1a-49f0-9f8e-fdc4c4feb625',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    campusId: 'ddc84522-b026-4644-928b-6b768c045022',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    universityId: '992b01af-4aca-4bd9-90f4-9a374a6ddb21',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    campusId: '88f6bbe1-11fe-4bc7-82da-7087a8c22c8f',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    campusId: '0a1a38b2-e6fc-4800-9c14-f08329232905',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    universityId: '9bc59bac-db8c-48f9-8673-074abdf8e1c6',
    productMapping: { GV: 'La Laguna', GTe: 'UAEMEX', GTa: 'La Laguna' },
  },
  {
    campusId: '938e8b25-92e5-4538-ab32-9dbce0ea6cca',
    productMapping: { GV: 'La Salle', GTe: 'UNAM', GTa: 'La Salle' },
  },
  {
    universityId: '3f4543a6-e334-4fb0-98ac-5ab9e695085f',
    productMapping: { GV: 'La Salle', GTe: 'UNAM', GTa: 'La Salle' },
  },
  {
    universityId: 'a26f3bc9-cbd0-4cac-880b-117a1bfad5eb',
    productMapping: { GV: 'La Salle', GTe: 'UNAM', GTa: 'La Salle' },
  },
  {
    universityId: '06b22fd1-22e8-4adf-b112-08bd41514786',
    productMapping: { GV: 'La Salle', GTe: 'UNAM', GTa: 'La Salle' },
  },
  {
    campusId: '04150471-ccc4-4321-92a9-6430bb460a13',
    productMapping: { GV: 'La Salle', GTe: 'UNAM', GTa: 'La Salle' },
  },
  {
    campusId: 'e904221f-cda8-41c3-85fc-20fd53feea73',
    productMapping: { GV: 'La Salle', GTe: 'UNAM', GTa: 'La Salle' },
  },
  {
    campusId: 'c6ccc780-ce2a-44be-b499-d06f9c16b2c0',
    productMapping: { GV: 'Aguascalientes', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: '94e687ba-8801-4f1d-9c2e-935e288fb9b5',
    productMapping: { GV: 'Aguascalientes', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: '806ac032-e399-4799-9077-7e7ac2b10dd7',
    productMapping: { GV: 'Aguascalientes', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '72c5c603-40fb-4674-8ea9-3af410bfb796',
    productMapping: { GV: 'Aguascalientes', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '65842ee4-704e-4536-a42b-f04d4a54b91f',
    productMapping: { GV: 'Aguascalientes', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '5bf68e9d-5f40-4f60-9144-33fdd5d2c03d',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '84a742e9-49da-4a0d-b85b-37b1bcaf33e5',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '88601a86-e193-4767-8c8e-71002ae51c03',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: 'e7454245-caf4-40e6-8642-58d3b550c636',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '200d2ea1-9de0-4409-b9cc-c2f90c08e8e2',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '9ffb9803-75fc-4b70-afac-bf48340b8979',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: '315213e4-ac8c-4dea-a9df-a804446574f6',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: 'a800ffab-127b-475d-8f11-ab57f9577a50',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '76d26252-61a4-44ff-a9bf-bfeced09b5fb',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: '574c8811-0267-4d66-abc8-bd016fd6b9c4',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '2d0505a4-53de-4038-ae2c-3b9040739406',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: '2a11dcb1-1bbb-4997-b9a0-b4062c81cb6f',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    campusId: '61370af2-499a-4612-9097-d792ee3e6659',
    productMapping: { GV: 'León', GTe: 'León', GTa: 'León' },
  },
  {
    universityId: '23234646-8b85-4e50-88b8-eac4f85a7d96',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    campusId: '34f29aaf-027a-4d80-acc2-cadc0ad4b369',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    universityId: '4f5eb807-aed4-472b-966f-551545397a88',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    universityId: 'b922eb36-b11c-4055-b885-f3ec824cd55c',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    universityId: '65e9270f-6026-4dc6-a3ba-5122f8ff4553',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    universityId: '83745559-edbf-4c43-b050-9b5329dfcbb8',
    productMapping: { GV: 'Michoacán', GTe: 'Querétaro', GTa: 'Michoacán' },
  },
  {
    universityId: '01aef961-3ad2-4702-8ba4-3dbfa202d656',
    productMapping: { GV: 'Nayarit', GTe: 'Querétaro', GTa: 'Nayarit' },
  },
  {
    universityId: 'b9e26eaf-0fba-4e3b-8b23-4ecb4ea5a961',
    productMapping: { GV: 'Nayarit', GTe: 'Querétaro', GTa: 'Nayarit' },
  },
  {
    universityId: '954101c7-2504-4073-b497-76518cf24d80',
    productMapping: { GV: 'Nayarit', GTe: 'Querétaro', GTa: 'Nayarit' },
  },
  {
    universityId: 'ba8e7d84-265a-421b-80d5-8daf0b58f8f1',
    productMapping: { GV: 'Nayarit', GTe: 'Querétaro', GTa: 'Nayarit' },
  },
  {
    universityId: '4c8e7ea7-48a4-4f98-b8ea-643739013483',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    campusId: '8d88bb82-5aa6-48f5-bede-c9a15ea7eda1',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: 'b0d7bb3d-36ae-4d60-9eb5-2c49fba06759',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: '02a7f508-db8b-423f-9f2c-087efbc70d8d',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: 'e7389f1d-6603-446f-aa04-dfab393d3ea3',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    campusId: '6798476c-4529-4751-b4ee-28bfd87d7f89',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: 'df5aac3c-e3f4-4f51-b7c0-ed8495e48f08',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: 'c6c8b47f-90ec-4aa4-a547-8979382e5ae9',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: '7dd91922-f0c9-45fb-8de4-05eacf2130c7',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: '9583a04d-68eb-40ef-b0f0-fa443ce583ea',
    productMapping: { GV: 'Oaxaca', GTe: 'Puebla', GTa: 'Oaxaca' },
  },
  {
    universityId: '9a209578-50f1-451a-8bdc-df76ac6b8095',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    campusId: '679f5647-54c1-4f97-8dfb-8a99fb0c48bf',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    campusId: 'bfc55349-c73d-481c-b45b-1a7258fdc7d4',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    universityId: '7172ac0e-fa43-4e01-8eee-3710758767fc',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    campusId: 'ac0a6a42-eabd-4cd7-a914-2d72dcf6c257',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    universityId: '40fe3132-d08e-4512-9c00-71fae39737d3',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    campusId: '2f300a87-5ff3-4161-a947-813c721c7aa8',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    universityId: 'a1d77764-745b-43ab-8feb-cffd056fced1',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    universityId: '5660e50d-3640-4ab2-aea0-dc8a20082a92',
    productMapping: { GV: 'Puebla', GTe: 'Puebla', GTa: 'Puebla' },
  },
  {
    campusId: '883aa722-5015-4ad2-8a66-b4322d68c7b1',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: '88a2ebdf-c6c0-498f-854f-0141649a6f86',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: 'b35824e9-55a9-48ec-9922-4cb497da93ca',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: 'bb865daf-e375-43a7-9c64-e9ec52520077',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: '6913dacd-7fae-493d-9c53-b33d63689baf',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: 'e56ec245-6ca0-47e6-870e-7072af6db104',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: '3233aa36-09dc-4a2b-8439-e6b1d455dd54',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: 'c8e461c0-8169-4b33-a7f0-f1d5e57f42ac',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: 'a87ffaa9-14f6-4e1a-bccc-d4297c13ce19',
    productMapping: { GV: 'Querétaro', GTe: 'Querétaro', GTa: 'Querétaro' },
  },
  {
    universityId: 'e2f56414-d198-4397-9e63-3570b2de17df',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: '9963775e-c0bc-4ded-9062-c065696514bf',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    campusId: '896d1824-e3ba-4033-9012-d44e5e7ad409',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    campusId: '0bac21c2-de49-40db-a942-98c1001b6c36',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: 'ae5f85f9-8ef7-421b-8adc-370d7499c0ff',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    campusId: '62d5d127-b4ad-42a4-b393-2abaeded7d2e',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: 'd65b35ac-a4ff-48ff-b035-9318153fe47d',
    productMapping: { GV: 'Los Mochis', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: 'eb4c6284-cea6-48b4-9778-200e0a071eda',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: '8006d234-2cd6-4690-a260-74736a089282',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    campusId: '253deaea-c001-42fc-9a15-c607bea9628f',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: '3c1bf8c9-03e1-4234-9540-bab5d1562eb4',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: 'f27c3e72-5a35-445e-b198-4fc601ab9dbd',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: '5053e899-83e7-4de0-ae14-058d63c34868',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    campusId: 'cad8d09d-9b75-4115-9ef3-43ce39a3737e',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: 'fbc02933-f78a-4e09-9d5d-a61023c0bc25',
    productMapping: { GV: 'Sinaloa', GTe: 'Puebla', GTa: 'Sinaloa' },
  },
  {
    universityId: '6d53f51f-2f5a-4cfd-a808-4fb4dfdd2e3e',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sinaloa' },
  },
  {
    campusId: 'b4b9c58e-9c6d-47c4-9c4e-f0ecd18d50a6',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sinaloa' },
  },
  {
    campusId: 'c435a533-b015-4745-9283-586228832358',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sinaloa' },
  },
  {
    campusId: '790f03fa-b103-495a-8296-8d5e9f9d11c9',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sonora' },
  },
  {
    universityId: '0742df8b-8950-457d-9102-bb68c987b66b',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sonora' },
  },
  {
    campusId: '741221d8-b935-4f3b-8e72-d423ad432053',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sonora' },
  },
  {
    universityId: 'd7e4c684-39f6-499f-bac9-91d24886dc97',
    productMapping: { GV: 'Sonora', GTe: 'León', GTa: 'Sonora' },
  },
  {
    universityId: '34f2f776-d70a-4487-b10d-8cf6a475c1f1',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: 'c5009ab1-c425-4603-ac98-beb816ee0aea',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: '16b0a4a1-d1fe-4f06-ab0d-7523c5afb1e4',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: '1eb7c2ae-a285-4e96-ace0-d67fa6e8e85f',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    campusId: 'ca3216b2-73c2-45ec-867f-7049b8a98787',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    campusId: '10bb297b-ab19-4555-b322-8bf1376cbb23',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: 'edf69b26-0e41-4c5f-9d87-386b51bd4f4e',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    campusId: '3b37a06b-19d4-4a6a-9a59-b7f515d884f1',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    campusId: 'addb0035-1359-4264-98b6-44b58150a449',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    campusId: '79a34b9a-0655-45e7-af18-df876efaf615',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: '9286ea41-1783-482c-8db6-73985c7a0386',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: '17b08b7c-558b-47aa-9a14-709caff06325',
    productMapping: { GV: 'Tabasco', GTe: 'Puebla', GTa: 'Tabasco' },
  },
  {
    universityId: '25049797-e7b6-4b82-896f-ec3566f239a3',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    universityId: '35dd1e53-d4c3-44ad-b892-f7fb4db0d0a8',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    universityId: 'abde8230-bc7f-4c8b-94dd-eb7795ce053c',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    campusId: '675fd511-b378-49f7-af46-3622bba8d014',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    universityId: 'c4434f8e-ad57-4352-bd8b-d3baff2ef2ea',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    universityId: '2653c9e8-7acc-4633-b38f-4c79d43d9ee2',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    campusId: '43e3bf8b-0ea6-44b0-b460-a4078897af79',
    productMapping: { GV: 'Tampico', GTe: 'Querétaro', GTa: 'Tampico' },
  },
  {
    campusId: 'bda64a31-5de8-421e-87f5-f9a6947c42e2',
    productMapping: { GV: 'Tec CEM', GTe: 'UNAM', GTa: 'Tec CEM' },
  },
  {
    campusId: '38e6e7cf-bc71-4985-be64-006e1730d7ae',
    productMapping: { GV: 'Tec CEM', GTe: 'UNAM', GTa: 'Tec CEM' },
  },
  {
    campusId: '6be6da22-51fc-44d4-9392-c4d50c36246d',
    productMapping: { GV: 'Tec CEM', GTe: 'UNAM', GTa: 'Tec CEM' },
  },
  {
    campusId: 'aad72d20-5607-4617-b59d-f48718b1b200',
    productMapping: { GV: 'Tec CEM', GTe: 'UNAM', GTa: 'Tec CEM' },
  },
  {
    campusId: '79c428d4-7833-4ec2-b265-88e0b99cfadc',
    productMapping: { GV: 'Tec CEM', GTe: 'UNAM', GTa: 'Tec CEM' },
  },
  {
    campusId: '517b753b-cde4-4ae6-bcfb-e8521396d90b',
    productMapping: { GV: 'Tec CEM', GTe: 'UNAM', GTa: 'Tec CEM' },
  },
  {
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    campusId: 'bf1aa12e-c904-4d29-9faf-0697b5d2efd2',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    campusId: '01adbab8-c92a-428b-a18f-f4ce7554ea78',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    campusId: '6d475318-ff8a-4deb-94d4-ee9a4f2ea753',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    universityId: 'e00768ca-bb66-4d04-b15d-09d33cbf0ed4',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    campusId: '9a2f38b3-1e65-415f-bb0c-45981ace67f9',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    universityId: '50c1627c-d407-4cd2-9b39-d6c31544ef7e',
    productMapping: {
      GV: 'Tec Monterrey',
      GTe: 'Querétaro',
      GTa: 'Tec Monterrey',
    },
  },
  {
    universityId: '96d2a5eb-1f6a-4de8-9996-71c1bb982483',
    productMapping: { GV: 'UDEM', GTe: 'Querétaro', GTa: 'Tec Monterrey' },
  },
  {
    universityId: '41f1f198-1b4f-4a3f-a739-e4ec07cd7bb8',
    productMapping: { GV: 'UDEM', GTe: 'Querétaro', GTa: 'Tec Monterrey' },
  },
  {
    campusId: '653fdd1c-a62a-4d68-870b-b5ab43b616a6',
    productMapping: { GV: 'UDEM', GTe: 'Querétaro', GTa: 'Tec Monterrey' },
  },
  {
    universityId: '7c04243e-7789-4f63-8b87-a5cf488fa9a2',
    productMapping: { GV: 'UDEM', GTe: 'Querétaro', GTa: 'Tec Monterrey' },
  },
  {
    universityId: 'a2d0a8c2-1203-4af7-99e6-724399edae69',
    productMapping: { GV: 'UDEM', GTe: 'Querétaro', GTa: 'Tec Monterrey' },
  },
  {
    campusId: '054f1cb8-bdd9-422d-921c-7553057c5932',
    productMapping: { GV: 'UDEM', GTe: 'Querétaro', GTa: 'Tec Monterrey' },
  },
  {
    universityId: 'e4c1c248-2d5b-4108-9879-3f8593f03c1f',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    universityId: '5b278897-eafc-4235-b036-b29f57d7ff69',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    campusId: 'a8c14aed-2f47-421e-960d-f2fdc0085239',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    campusId: '7dfca2a0-224b-485d-9cba-feefdc236747',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    campusId: 'cf32fd99-b145-426a-81b2-d32e8e49972a',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    campusId: 'c2ecec3c-f1e9-4f56-b2c6-021b90fcc11e',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    campusId: '4405f218-bffc-44e0-a47f-4588c525bf6c',
    productMapping: { GV: 'Tec Santa Fe', GTe: 'UNAM', GTa: 'Tec Santa Fe' },
  },
  {
    universityId: '8787700b-db6b-4664-bff7-9eef7e00c49d',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    universityId: 'a6ac2212-1266-4f4b-8cc1-a5da6d3ca08f',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    universityId: '61d3bb1a-d40c-42e8-b9b6-de0a4e8d527e',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    campusId: 'd83f554a-09fe-4520-b911-26b691523f4c',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    universityId: '82d02942-7929-43cf-80fb-9a52597699e6',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    campusId: '28a28747-d560-42c2-b63f-b86ec6a80984',
    productMapping: { GV: 'Tec Toluca', GTe: 'UAEMEX', GTa: 'Tec Toluca' },
  },
  {
    universityId: '95015106-6b38-4e42-b447-278d361c9f86',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    universityId: 'a321e338-a150-456a-b85d-014fa8e3a072',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    universityId: 'a80ca74d-0df0-4c0b-910e-185b92f19087',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    campusId: 'be5abbaa-9253-44b5-94ec-1ec0a2174491',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    universityId: '360c407e-8bfb-4593-9c4a-693cfa475404',
    productMapping: { GV: 'Tijuana', GTe: 'UNAM', GTa: 'Tijuana' },
  },
  {
    universityId: '4ac0b5d8-77d9-47f1-81ea-8583a5cbcbd5',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    campusId: 'd7b4a930-7e2d-4c2b-8bc2-6be6ca79c358',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    universityId: 'e601750b-0090-40c9-b794-72795cc08cbe',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    universityId: 'e121e6f9-ed2a-4ee5-9b56-83fea20e88c5',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    universityId: 'b05624d8-dab8-47ee-aef8-78484444be01',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    universityId: 'feb50b23-5d51-4ace-a014-d0763d7bb7e9',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    universityId: '5b8f5c68-fe19-4bc7-aadb-2f2dbe8d40bd',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    universityId: 'd3efb73e-039b-4416-88fe-4d0580bcadbd',
    productMapping: { GV: 'UAEMEX', GTe: 'UAEMEX', GTa: 'UAEMEX' },
  },
  {
    campusId: '9e898d85-dddb-4b36-8711-a3990ee05dca',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: '48fc6bff-cb76-494a-b1f6-6a2b7b784430',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    campusId: '6c68d0a2-8e94-465c-ac13-db095f36c73e',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: '628612ed-5e55-48df-97bb-1e99a3f8faab',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    campusId: '46344597-c91a-46a4-9cc2-83795502ab4a',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: 'd96c3fd4-d45b-4638-814e-87e516cb7d79',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    campusId: '23a947ac-2cfd-4cb4-911e-d5dcd40d39dc',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    campusId: '82fdd7d8-a37a-4491-acbb-118897337495',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    campusId: '5b35ca58-92fe-4066-b750-32c7f3e2acd7',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: '6d02d890-177c-4045-b2fc-0c16f227b439',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: '14e6686e-b3b7-4b3f-9f89-31431b91ecb3',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: 'd72fc80b-a32f-45f1-ad2e-3809af6a10e9',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: '51c06a52-2e41-44bb-92ef-f1287552d15a',
    productMapping: { GV: 'UNAM', GTe: 'UNAM', GTa: 'UNAM' },
  },
  {
    universityId: 'f986fa2d-abcf-4ffd-afbe-5cd4708b3e37',
    productMapping: { GV: 'UP', GTe: 'UNAM', GTa: 'UP' },
  },
  {
    universityId: '1392d61b-6b47-4dc6-a995-2a0f16c37810',
    productMapping: { GV: 'UP', GTe: 'UNAM', GTa: 'UP' },
  },
  {
    campusId: '33b68e1d-640a-436d-8235-da6b222b0ef0',
    productMapping: { GV: 'UP', GTe: 'UNAM', GTa: 'UP' },
  },
  {
    campusId: '004b80ee-cc75-42a7-8d18-e0418d4cec51',
    productMapping: { GV: 'UP', GTe: 'UNAM', GTa: 'UP' },
  },
  {
    universityId: '30041d7a-e039-4e07-8674-2567238af15c',
    productMapping: { GV: 'UP', GTe: 'UNAM', GTa: 'UP' },
  },
  {
    universityId: 'e6318698-abdc-4d4e-b2f8-2c9473aeb106',
    productMapping: { GV: 'UP', GTe: 'UNAM', GTa: 'UP' },
  },
  {
    universityId: 'e5963543-7bfb-4782-a69a-fb3d87c5e567',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: '070d59d6-f356-4852-b105-918d632725c9',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: 'a73bcd0a-c20a-4abc-a90e-1b87a3d70196',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: '3198cc5b-0cf9-4d21-b73e-287756ce462f',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: '2acf045a-6883-4b9e-89d8-4db54ba273b9',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    campusId: '756933bf-fd90-4037-9ae3-8fe471337c4b',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: '71815117-5482-4078-9855-5f1c70324207',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: '8d5fcc41-afab-48a7-945e-fb3b5ac279ab',
    productMapping: { GV: 'Veracruz', GTe: 'Puebla', GTa: 'Veracruz' },
  },
  {
    universityId: '097aca16-1ec6-4eca-be54-829a81e1d037',
    productMapping: { GV: 'Zacatecas', GTe: 'Querétaro', GTa: 'Zacatecas' },
  },
  {
    campusId: '88f4fa94-df29-4a67-9ba2-0cc88496e1e6',
    productMapping: { GV: 'Zacatecas', GTe: 'Querétaro', GTa: 'Zacatecas' },
  },
  {
    universityId: '43167cba-0915-4e6f-ae3e-61eaec57a850',
    productMapping: { GV: 'Zacatecas', GTe: 'Querétaro', GTa: 'Zacatecas' },
  },
  {
    universityId: '3270b6db-3419-442c-835d-5fa10b943507',
    productMapping: { GV: 'Zacatecas', GTe: 'Querétaro', GTa: 'Zacatecas' },
  },
  {
    universityId: '4b2b9554-fa0f-41dd-820e-a6e75ed3119f',
    productMapping: { GV: 'Zacatecas', GTe: 'Querétaro', GTa: 'Zacatecas' },
  },
];
