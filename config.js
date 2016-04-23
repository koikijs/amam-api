module.exports = {
  attribution: {
    '{{url}}/admin/api/models': [
      {
        app: 'amam',
        name: 'group'
      },
      {
        app: 'amam',
        name: 'member'
      },
      {
        app: 'amam',
        name: 'stat'
      },
      {
        app: 'amam',
        name: 'absent'
      }
    ],
    '{{url}}/admin/api/attributes': [
      {
        app: 'amam',
        name: 'name',
        uniq: true,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern:'^[a-zA-Z\\d]+$',
        invalid: 'Only alphabets and numbers are allowed',
        model:'group'
      },
      {
        app: 'amam',
        name: 'members',
        uniq: false,
        required: false,
        type:'children',
        relation:'member',
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'group'
      },
      {
        app: 'amam',
        name: 'owner',
        uniq: false,
        required: false,
        type:'instance',
        relation:'member',
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'group'
      },
      {
        app: 'amam',
        name: 'icon',
        uniq: false,
        required: false,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'group'
      },
      {
        app: 'amam',
        name: 'name',
        uniq: true,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern:'^[a-zA-Z\\d\\-]+$',
        invalid: 'Only alphabets and numbers and hiphen are allowed',
        model:'member'
      },
      {
        app: 'amam',
        name: 'group',
        uniq: false,
        required: false,
        type:'parent',
        relation:'group',
        relationAttribute:'members',
        pattern: null,
        invalid: null,
        model:'member'
      },
      {
        app: 'amam',
        name: 'absents',
        uniq: false,
        required: false,
        type:'children',
        relation:'absent',
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'member'
      },
      {
        app: 'amam',
        name: 'icon',
        uniq: false,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'member'
      },
      {
        app: 'amam',
        name: 'key',
        uniq: true,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern:'^[a-z]+$',
        invalid: 'Only alphabets are allowed',
        model:'stat'
      },
      {
        app: 'amam',
        name: 'text',
        uniq: false,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'stat'
      },
      {
        app: 'amam',
        name: 'member',
        uniq: true,
        required: true,
        type:'parent',
        relation:'member',
        relationAttribute:'absents',
        pattern: null,
        invalid: null,
        model:'absent'
      },
      {
        app: 'amam',
        name: 'date',
        uniq: true,
        required: true,
        type:'date',
        relation: null,
        relationAttribute: null,
        pattern:'^\\d\\d\\d\\d-\\d\\d-\\d\\d$',
        invalid: 'Format should be YYYY-MM-DD',
        model:'absent'
      },
      {
        app: 'amam',
        name: 'stat',
        uniq: false,
        required: true,
        type:'instance',
        relation:'stat',
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'absent'
      },
      {
        app: 'amam',
        name: 'start',
        uniq: false,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern:'^\\d\\d:\\d\\d$',
        invalid: 'Format should be HH:MM',
        model:'absent'
      },
      {
        app: 'amam',
        name: 'end',
        uniq: false,
        required: true,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern:'^\\d\\d:\\d\\d$',
        invalid: 'Format should be HH:MM',
        model:'absent'
      },
      {
        app: 'amam',
        name: 'reason',
        uniq: false,
        required: false,
        type:'string',
        relation: null,
        relationAttribute: null,
        pattern: null,
        invalid: null,
        model:'absent'
      }
    ]
  },
  record: {
    '{{url}}/apis/amam/groups': [
      {
        name: 'UXD'
      },
      {
        name: 'Platform'
      }
    ],
    '{{url}}/apis/amam/members': [
      {
        name: 'sideroad',
        group: 'uxd',
        icon: 'https://avatars2.githubusercontent.com/u/411486?v=3&s=460'
      },
      {
        name: 'nab',
        group: 'uxd',
        icon: 'https://avatars0.githubusercontent.com/u/284550?v=3&s=460'
      },
      {
        name: 'taka66',
        group: 'platform',
        icon: 'https://avatars1.githubusercontent.com/u/5513724?v=3&s=460'
      },
      {
        name: 'ninja-inc',
        group: 'platform',
        icon: 'https://avatars2.githubusercontent.com/u/9511431?v=3&s=460'
      }
    ],
    '{{url}}/apis/amam/stats': [
      {
        key: 'paid',
        text: 'Paid leave'
      },
      {
        key: 'morning',
        text: 'Morning off'
      },
      {
        key: 'afternoon',
        text: 'Afternoon off'
      },
      {
        key: 'late',
        text: 'Late'
      },
      {
        key: 'business',
        text: 'Business Events'
      }
    ],
    '{{url}}/apis/amam/absents': [
      {
        member:'sideroad',
        date:'2016-01-01',
        stat:'paid',
        start:'09:00',
        end:'17:00',
        reason:'Happy new year'
      },
      {
        member:'nab',
        date:'2016-01-01',
        stat:'morning',
        start:'09:00',
        end:'17:00',
        reason:'Happy new year'
      },
      {
        member:'taka66',
        date:'2016-01-01',
        stat:'afternoon',
        start:'09:00',
        end:'17:00',
        reason:'Happy new year'
      },
      {
        member:'ninja-inc',
        date:'2016-01-01',
        stat:'late',
        start:'09:00',
        end:'17:00',
        reason:'Happy new year'
      }
    ]
  }
};
