import { Campus } from 'src/common/entities/campus';

type CampusSeed = Omit<Campus, 'university' | 'state'> & {
  universityId: string;
  state: string;
};

export const CampusesSeeds: CampusSeed[] = [
  {
    id: '8b8c8a81-042e-4579-a91a-fc4fbcbe3399',
    universityId: 'aa9bc2a7-385b-4dcc-b996-a65b56fedb58',
    name: 'Sur',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: 'cf32fd99-b145-426a-81b2-d32e8e49972a',
    universityId: 'aa9bc2a7-385b-4dcc-b996-a65b56fedb58',
    name: 'Norte',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '8d88bb82-5aa6-48f5-bede-c9a15ea7eda1',
    universityId: 'aa9bc2a7-385b-4dcc-b996-a65b56fedb58',
    name: 'Oaxaca',
    isMainCampus: false,
    state: 'Oaxaca',
  },
  {
    id: 'bfc55349-c73d-481c-b45b-1a7258fdc7d4',
    universityId: 'aa9bc2a7-385b-4dcc-b996-a65b56fedb58',
    name: 'Puebla',
    isMainCampus: false,
    state: 'Puebla',
  },
  {
    id: '79a34b9a-0655-45e7-af18-df876efaf615',
    universityId: 'aa9bc2a7-385b-4dcc-b996-a65b56fedb58',
    name: 'Mayab',
    isMainCampus: false,
    state: 'Yucatán',
  },
  {
    id: '938e8b25-92e5-4538-ab32-9dbce0ea6cca',
    universityId: '0e9d7ece-b8d0-4f1b-b162-b78605f4b3a4',
    name: 'Ciudad de México',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: 'bda64a31-5de8-421e-87f5-f9a6947c42e2',
    universityId: '0e9d7ece-b8d0-4f1b-b162-b78605f4b3a4',
    name: 'Reforma',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '38e6e7cf-bc71-4985-be64-006e1730d7ae',
    universityId: '0e9d7ece-b8d0-4f1b-b162-b78605f4b3a4',
    name: 'Tlalnepantla',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: 'd7b4a930-7e2d-4c2b-8bc2-6be6ca79c358',
    universityId: '0e9d7ece-b8d0-4f1b-b162-b78605f4b3a4',
    name: 'Toluca',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '5bf68e9d-5f40-4f60-9144-33fdd5d2c03d',
    universityId: '0e9d7ece-b8d0-4f1b-b162-b78605f4b3a4',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: 'addb0035-1359-4264-98b6-44b58150a449',
    universityId: '0e9d7ece-b8d0-4f1b-b162-b78605f4b3a4',
    name: 'Yucatán',
    isMainCampus: false,
    state: 'Yucatán',
  },
  {
    id: 'e5ef131e-b380-4695-b77c-5c6621a3091e',
    universityId: '94ca7953-9ba3-4be2-ae37-027cc4f72fc0',
    isMainCampus: true,
    state: 'Ciudad de México',
  },
  {
    id: 'ddc84522-b026-4644-928b-6b768c045022',
    universityId: '94ca7953-9ba3-4be2-ae37-027cc4f72fc0',
    name: 'Torreón',
    isMainCampus: false,
    state: 'Coahuila',
  },
  {
    id: '2d0505a4-53de-4038-ae2c-3b9040739406',
    universityId: '94ca7953-9ba3-4be2-ae37-027cc4f72fc0',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '2f300a87-5ff3-4161-a947-813c721c7aa8',
    universityId: '94ca7953-9ba3-4be2-ae37-027cc4f72fc0',
    name: 'Puebla',
    isMainCampus: false,
    state: 'Puebla',
  },
  {
    id: 'be5abbaa-9253-44b5-94ec-1ec0a2174491',
    universityId: '94ca7953-9ba3-4be2-ae37-027cc4f72fc0',
    name: 'Tijuana',
    isMainCampus: false,
    state: 'Baja California',
  },
  {
    id: '9379d762-50f9-4c68-a465-145d14da73b0',
    universityId: '38a7ae38-cc6a-430a-b4eb-0326070cb449',
    isMainCampus: false,
    denomination: 'ESCOM',
    state: 'Ciudad de México',
  },
  {
    id: 'f3185489-5bbd-4f12-9c7e-01d864e07473',
    universityId: '38a7ae38-cc6a-430a-b4eb-0326070cb449',
    isMainCampus: false,
    denomination: 'UPIICSA',
    state: 'Ciudad de México',
  },
  {
    id: '3f8cb71a-75d3-4368-8ae5-e28a8daa45da',
    universityId: '38a7ae38-cc6a-430a-b4eb-0326070cb449',
    isMainCampus: false,
    denomination: 'ESCA',
    state: 'Ciudad de México',
  },
  {
    id: '88601a86-e193-4767-8c8e-71002ae51c03',
    universityId: '38a7ae38-cc6a-430a-b4eb-0326070cb449',
    name: 'Guanajuato',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: 'c6ccc780-ce2a-44be-b499-d06f9c16b2c0',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Aguascalientes',
    isMainCampus: false,
    state: 'Aguascalientes',
  },
  {
    id: 'a8c14aed-2f47-421e-960d-f2fdc0085239',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'CCM',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '7dfca2a0-224b-485d-9cba-feefdc236747',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Santa Fe',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '6df645b4-3b6e-40b0-9229-61e09199ee03',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Chihuahua',
    isMainCampus: false,
    state: 'Chihuahua',
  },
  {
    id: '46c0eeab-e60b-4a75-bd1d-39b56eb515b3',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Ciudad Juárez',
    isMainCampus: false,
    state: 'Chihuahua',
  },
  {
    id: '70bcd433-9663-4671-9ab0-76d53ea2b617',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Laguna',
    isMainCampus: false,
    state: 'Coahuila',
  },
  {
    id: '6be6da22-51fc-44d4-9392-c4d50c36246d',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'CEM',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: 'd83f554a-09fe-4520-b911-26b691523f4c',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Toluca',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '93995bd5-f588-4dfc-8f2b-3dc6f2e35a1c',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Irapuato',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '34f29aaf-027a-4d80-acc2-cadc0ad4b369',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Morelia',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '200d2ea1-9de0-4409-b9cc-c2f90c08e8e2',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: 'e596c5d9-f6fe-430a-ae8a-03904aa646ec',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Guadalajara',
    isMainCampus: false,
    state: 'Jalisco',
  },
  {
    id: '9e898d85-dddb-4b36-8711-a3990ee05dca',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Cuernavaca',
    isMainCampus: false,
    state: 'Morelos',
  },
  {
    id: '1c49032b-f115-496e-950a-3dd3438cdd51',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    isMainCampus: true,
    state: 'Nuevo León',
  },
  {
    id: '679f5647-54c1-4f97-8dfb-8a99fb0c48bf',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Puebla',
    isMainCampus: false,
    state: 'Puebla',
  },
  {
    id: '883aa722-5015-4ad2-8a66-b4322d68c7b1',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Querétaro',
    isMainCampus: false,
    state: 'Querétaro',
  },
  {
    id: '253deaea-c001-42fc-9a15-c607bea9628f',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Sinaloa',
    isMainCampus: false,
    state: 'Sinaloa',
  },
  {
    id: '38c95fb7-4a32-452a-ab39-4852948ba45c',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Ciudad Obregón',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: '790f03fa-b103-495a-8296-8d5e9f9d11c9',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Hermosillo',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: '675fd511-b378-49f7-af46-3622bba8d014',
    universityId: '90c384ed-7fbc-44e4-b08d-e201c8986483',
    name: 'Tampico',
    isMainCampus: false,
    state: 'Tamaulipas',
  },
  {
    id: '04150471-ccc4-4321-92a9-6430bb460a13',
    universityId: '86a308ac-8deb-487e-a03c-fcb3c5d116a1',
    name: 'Condesa',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: 'e904221f-cda8-41c3-85fc-20fd53feea73',
    universityId: '86a308ac-8deb-487e-a03c-fcb3c5d116a1',
    name: 'Nezahualcóyotl',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '0a1a38b2-e6fc-4800-9c14-f08329232905',
    universityId: '86a308ac-8deb-487e-a03c-fcb3c5d116a1',
    name: 'Laguna',
    isMainCampus: false,
    state: 'Coahuila',
  },
  {
    id: '6c68d0a2-8e94-465c-ac13-db095f36c73e',
    universityId: '86a308ac-8deb-487e-a03c-fcb3c5d116a1',
    name: 'Cuernavaca',
    isMainCampus: false,
    state: 'Morelos',
  },
  {
    id: '6798476c-4529-4751-b4ee-28bfd87d7f89',
    universityId: '86a308ac-8deb-487e-a03c-fcb3c5d116a1',
    name: 'Oaxaca',
    isMainCampus: false,
    state: 'Oaxaca',
  },
  {
    id: 'bbdbae6a-34b9-4398-a54f-5b51c6260ac1',
    universityId: '86a308ac-8deb-487e-a03c-fcb3c5d116a1',
    name: 'Noroeste',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: '4933dd3b-11db-430d-93e0-10b6eaa3b445',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Ciudad Juárez',
    isMainCampus: false,
    state: 'Chihuahua',
  },
  {
    id: 'e5b261e7-7a0b-4dce-afbd-db8384699490',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Chihuahua',
    isMainCampus: false,
    state: 'Chihuahua',
  },
  {
    id: '88f6bbe1-11fe-4bc7-82da-7087a8c22c8f',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Laguna',
    isMainCampus: false,
    state: 'Coahuila',
  },
  {
    id: '517b753b-cde4-4ae6-bcfb-e8521396d90b',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Cuautitlán Izcalli',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '28a28747-d560-42c2-b63f-b86ec6a80984',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Toluca',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '805723f1-0040-4967-82a8-fb5ee91aae6d',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Guadalajara',
    isMainCampus: false,
    state: 'Jalisco',
  },
  {
    id: '46344597-c91a-46a4-9cc2-83795502ab4a',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Cuernavaca',
    isMainCampus: false,
    state: 'Morelos',
  },
  {
    id: '9a2f38b3-1e65-415f-bb0c-45981ace67f9',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Monterrey',
    isMainCampus: false,
    state: 'Nuevo León',
  },
  {
    id: 'cad8d09d-9b75-4115-9ef3-43ce39a3737e',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Sinaloa',
    isMainCampus: false,
    state: 'Sinaloa',
  },
  {
    id: '741221d8-b935-4f3b-8e72-d423ad432053',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Hermosillo',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: '3b37a06b-19d4-4a6a-9a59-b7f515d884f1',
    universityId: '8046861c-613a-4da5-bb05-70b28e6d0600',
    name: 'Villahermosa',
    isMainCampus: false,
    state: 'Tabasco',
  },
  {
    id: '896d1824-e3ba-4033-9012-d44e5e7ad409',
    universityId: '17007c5e-3e5f-4fa1-81e2-d01d01076452',
    name: 'Los Mochis',
    isMainCampus: false,
    state: 'Sinaloa',
  },
  {
    id: '88f4fa94-df29-4a67-9ba2-0cc88496e1e6',
    universityId: '17007c5e-3e5f-4fa1-81e2-d01d01076452',
    name: 'Zacatecas',
    isMainCampus: false,
    state: 'Zacatecas',
  },
  {
    id: '62d5d127-b4ad-42a4-b393-2abaeded7d2e',
    universityId: '3c1bf8c9-03e1-4234-9540-bab5d1562eb4',
    name: 'Los Mochis',
    isMainCampus: false,
    state: 'Sinaloa',
  },
  {
    id: 'ca44b302-3128-4822-9e72-f564b81ad827',
    universityId: '3c1bf8c9-03e1-4234-9540-bab5d1562eb4',
    name: 'Culiacán',
    isMainCampus: false,
    state: 'Sinaloa',
  },
  {
    id: 'c1e2a6fa-4dd9-4679-b015-d82170ff4efc',
    universityId: '691a0c79-1b8e-4d44-ac2c-04e0fa6aee4a',
    name: 'Azcapotzalco',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: 'c2ecec3c-f1e9-4f56-b2c6-021b90fcc11e',
    universityId: '691a0c79-1b8e-4d44-ac2c-04e0fa6aee4a',
    name: 'Cuajimalpa',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '4405f218-bffc-44e0-a47f-4588c525bf6c',
    universityId: '691a0c79-1b8e-4d44-ac2c-04e0fa6aee4a',
    name: 'Santa Fe',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '5b35ca58-92fe-4066-b750-32c7f3e2acd7',
    universityId: '691a0c79-1b8e-4d44-ac2c-04e0fa6aee4a',
    name: 'Xochimilco',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: 'bf1aa12e-c904-4d29-9faf-0697b5d2efd2',
    universityId: '8bbaf674-1983-4142-aab5-a714dece16a7',
    isMainCampus: false,
    denomination: 'Ciencias Agropecuarias',
    state: 'Nuevo León',
  },
  {
    id: '01adbab8-c92a-428b-a18f-f4ce7554ea78',
    universityId: '8bbaf674-1983-4142-aab5-a714dece16a7',
    name: 'Ciudad Universitaria',
    isMainCampus: false,
    state: 'Nuevo León',
  },
  {
    id: '6d475318-ff8a-4deb-94d4-ee9a4f2ea753',
    universityId: '8bbaf674-1983-4142-aab5-a714dece16a7',
    name: 'Mederos',
    isMainCampus: false,
    state: 'Nuevo León',
  },
  {
    id: '653fdd1c-a62a-4d68-870b-b5ab43b616a6',
    universityId: '8bbaf674-1983-4142-aab5-a714dece16a7',
    isMainCampus: false,
    denomination: 'Medicina',
    state: 'Nuevo León',
  },
  {
    id: 'b676f1f6-9d75-4f4c-8557-234742b40561',
    universityId: 'f27c3e72-5a35-445e-b198-4fc601ab9dbd',
    isMainCampus: true,
    state: 'Sinaloa',
  },
  {
    id: '0bac21c2-de49-40db-a942-98c1001b6c36',
    universityId: 'f27c3e72-5a35-445e-b198-4fc601ab9dbd',
    name: 'Los Mochis',
    isMainCampus: false,
    state: 'Sinaloa',
  },
  {
    id: 'e15ee886-5f01-454b-a8fc-c6900c9d6b01',
    universityId: '869a00c8-94de-413e-8f0b-713bef529552',
    name: 'Irapuato-Salamanca',
    isMainCampus: false,
    denomination: 'División Ingenierías',
    state: 'Guanajuato',
  },
  {
    id: '1f407577-8e96-46a7-853c-7a04a8819175',
    universityId: '869a00c8-94de-413e-8f0b-713bef529552',
    name: 'Celaya-Salvatierra',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: 'e785454f-5bad-4932-85de-9f7909ad68fc',
    universityId: '869a00c8-94de-413e-8f0b-713bef529552',
    name: 'Irapuato-Salamanca',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '9ffb9803-75fc-4b70-afac-bf48340b8979',
    universityId: '869a00c8-94de-413e-8f0b-713bef529552',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '23a947ac-2cfd-4cb4-911e-d5dcd40d39dc',
    universityId: 'd72fc80b-a32f-45f1-ad2e-3809af6a10e9',
    isMainCampus: false,
    denomination: 'Artes y Diseño',
    state: 'Ciudad de México',
  },
  {
    id: '82fdd7d8-a37a-4491-acbb-118897337495',
    universityId: 'd72fc80b-a32f-45f1-ad2e-3809af6a10e9',
    isMainCampus: false,
    state: '',
  },
  {
    id: '1ea60f80-6209-4bc4-8652-ea28811a5fa9',
    universityId: '83d85647-8fd1-4bea-baa5-7049eddd5807',
    name: 'Atizapán',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '61370af2-499a-4612-9097-d792ee3e6659',
    universityId: '83d85647-8fd1-4bea-baa5-7049eddd5807',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: 'c645e96b-79a8-457f-ba7f-73d134a3c568',
    universityId: '83d85647-8fd1-4bea-baa5-7049eddd5807',
    name: 'Guadalajara',
    isMainCampus: false,
    state: 'Jalisco',
  },
  {
    id: 'a800ffab-127b-475d-8f11-ab57f9577a50',
    universityId: 'a93fc345-b12c-479f-8fb7-d8b572db8a91',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '05d45b22-98de-4e76-9600-7b11dc3c5829',
    universityId: 'a93fc345-b12c-479f-8fb7-d8b572db8a91',
    isMainCampus: true,
    state: 'Jalisco',
  },
  {
    id: '4f9926b5-d5cc-4887-aa63-2a59c9df8a44',
    universityId: 'ca037900-3326-47a7-b27a-51cd832c1165',
    isMainCampus: true,
    state: 'Jalisco',
  },
  {
    id: 'ca3216b2-73c2-45ec-867f-7049b8a98787',
    universityId: 'ca037900-3326-47a7-b27a-51cd832c1165',
    name: 'Tabasco',
    isMainCampus: false,
    state: 'Tabasco',
  },
  {
    id: 'b4b9c58e-9c6d-47c4-9c4e-f0ecd18d50a6',
    universityId: 'a99d8f6a-fdb7-454b-891d-bfe35a7e7491',
    name: 'Hermosillo',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: '686fb2f1-b00d-49f1-bd33-4b11ca66e098',
    universityId: 'a99d8f6a-fdb7-454b-891d-bfe35a7e7491',
    name: 'Ciudad Obregón',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: 'f323ada7-7dea-46bb-9f93-c32bbb9b3680',
    universityId: '8d5fcc41-afab-48a7-945e-fb3b5ac279ab',
    name: 'Veracruz',
    isMainCampus: false,
    state: 'Veracruz',
  },
  {
    id: '5743d205-fc60-4770-923c-10d07bdb41dc',
    universityId: '8d5fcc41-afab-48a7-945e-fb3b5ac279ab',
    name: 'Poza Rica',
    isMainCampus: false,
    state: 'Veracruz',
  },
  {
    id: '27bad225-d2e1-4b07-8b2d-57a920458838',
    universityId: 'e6318698-abdc-4d4e-b2f8-2c9473aeb106',
    isMainCampus: true,
    state: 'Ciudad de México',
  },
  {
    id: '65842ee4-704e-4536-a42b-f04d4a54b91f',
    universityId: 'e6318698-abdc-4d4e-b2f8-2c9473aeb106',
    name: 'Aguascalientes',
    isMainCampus: false,
    state: 'Aguascalientes',
  },
  {
    id: 'ff3e8655-a71c-48f7-8f00-c1f600b7892b',
    universityId: 'e6318698-abdc-4d4e-b2f8-2c9473aeb106',
    name: 'Guadalajara',
    isMainCampus: false,
    state: 'Jalisco',
  },
  {
    id: '72c5c603-40fb-4674-8ea9-3af410bfb796',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Aguascalientes',
    isMainCampus: false,
    state: 'Aguascalientes',
  },
  {
    id: 'd6223a89-8fd3-421b-bfe7-16d367cdac27',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'San Rafael',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '87f57c31-8639-4f87-95e2-36ace8515a5d',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'San Ángel',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '33b68e1d-640a-436d-8235-da6b222b0ef0',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Coyoacán',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: '004b80ee-cc75-42a7-8d18-e0418d4cec51',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Tlalpan',
    isMainCampus: false,
    state: 'Ciudad de México',
  },
  {
    id: 'c533c051-8b1a-49f0-9f8e-fdc4c4feb625',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Laguna',
    isMainCampus: false,
    state: 'Coahuila',
  },
  {
    id: 'aad72d20-5607-4617-b59d-f48718b1b200',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Lago de Guadalupe',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '79c428d4-7833-4ec2-b265-88e0b99cfadc',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Lomas Verdes',
    isMainCampus: false,
    state: 'Estado de México',
  },
  {
    id: '76d26252-61a4-44ff-a9bf-bfeced09b5fb',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
  {
    id: '054f1cb8-bdd9-422d-921c-7553057c5932',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Monterrey',
    isMainCampus: false,
    state: 'Nuevo León',
  },
  {
    id: 'ac0a6a42-eabd-4cd7-a914-2d72dcf6c257',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Puebla',
    isMainCampus: false,
    state: 'Puebla',
  },
  {
    id: 'c435a533-b015-4745-9283-586228832358',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Hermosillo',
    isMainCampus: false,
    state: 'Sonora',
  },
  {
    id: '10bb297b-ab19-4555-b322-8bf1376cbb23',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Villahermosa',
    isMainCampus: false,
    state: 'Tabasco',
  },
  {
    id: '43e3bf8b-0ea6-44b0-b460-a4078897af79',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Tampico',
    isMainCampus: false,
    state: 'Tamaulipas',
  },
  {
    id: '756933bf-fd90-4037-9ae3-8fe471337c4b',
    universityId: '9fb37de5-1cc0-4789-ba48-a201041c2678',
    name: 'Veracruz',
    isMainCampus: false,
    state: 'Veracruz',
  },
  {
    id: '84a742e9-49da-4a0d-b85b-37b1bcaf33e5',
    universityId: '9b9465a0-7998-48fb-bafc-f52db2a5a946',
    name: 'León',
    isMainCampus: false,
    state: 'Guanajuato',
  },
];
