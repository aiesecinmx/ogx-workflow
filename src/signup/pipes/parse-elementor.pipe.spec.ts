import { ParseElementorPipe } from './parse-elementor.pipe';

describe('ParseElementorPipe', () => {
  let pipe: ParseElementorPipe;

  beforeEach(() => {
    pipe = new ParseElementorPipe();
  });

  it('should be defined', () => {
    expect(pipe).toBeDefined();
  });

  it('should transform elementor input', () => {
    const fixture = {
      form: {
        id: 'this-is-an-id',
        name: 'ogvRegistration',
      },
      fields: {
        firstName: {
          id: 'firstName',
          type: 'text',
          title: 'Nombre(s)',
          value: 'Test',
          raw_value: 'Test',
          required: '1',
        },
        lastName: {
          id: 'lastName',
          type: 'text',
          title: 'Apellidos',
          value: 'AIESEC',
          raw_value: 'AIESEC',
          required: '1',
        },
        email: {
          id: 'email',
          type: 'email',
          title: 'Correo Electrónico',
          value: 'test@example.com',
          raw_value: 'test@example.com',
          required: '1',
        },
        password: {
          id: 'password',
          type: 'password',
          title:
            'Contraseña (para nuestra plataforma de búsqueda de proyectos)',
          value: 'password123',
          raw_value: 'password123',
          required: '1',
        },
        phone: {
          id: 'phone',
          type: 'text',
          title: 'Número telefónico (a 10 dígitos)',
          value: '5555555555',
          raw_value: '5555555555',
          required: '1',
        },
        state: {
          id: 'state',
          type: 'select',
          title: 'Estado de la República',
          value: '27',
          raw_value: '27',
          required: '1',
        },
        allocation: {
          id: 'allocation',
          type: 'select',
          title: 'Universidad',
          value: '9a300e10-40d8-4c2e-b4f1-edb2d7010571',
          raw_value: '9a300e10-40d8-4c2e-b4f1-edb2d7010571',
          required: '1',
        },
        universityMajor: {
          id: 'universityMajor',
          type: 'select',
          title: 'Carrera universitaria',
          value: 'Ingenierías',
          raw_value: 'Ingenierías',
          required: '1',
        },
        semester: {
          id: 'semester',
          type: 'select',
          title: 'Semestre (o equivalente)',
          value: 'Ya me gradué',
          raw_value: 'Ya me gradué',
          required: '1',
        },
        referral: {
          id: 'referral',
          type: 'select',
          title: '¿Cómo te enteraste de nosotros?',
          value: 'Soy Miembro de AIESEC',
          raw_value: 'Soy Miembro de AIESEC',
          required: '1',
        },
        sdgs: {
          id: 'sdgs',
          type: 'select',
          title:
            '¿Te interesta alguno de los Objetivos de Desarrolo Sostenible?',
          value: '16',
          raw_value: '16',
          required: '0',
        },
        comments: {
          id: 'comments',
          type: 'textarea',
          title: '¿Algo que nos quieras decir? ¿Tienes alguna pregunta?',
          value: '',
          raw_value: '',
          required: '0',
        },
        gdpr: {
          id: 'gdpr',
          type: 'html',
          title: 'Aviso de Privacidad',
          value: '',
          raw_value: '',
          required: '0',
        },
        field_af8200c: {
          id: 'field_af8200c',
          type: 'html',
          title: 'Load States and Universities',
          value: '',
          raw_value: '',
          required: '0',
        },
      },
    };

    expect(pipe.transform(fixture)).toMatchSnapshot();
  });
});
