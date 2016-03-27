module.exports = {
  attribution: {
    '/admin/api/models': [
      {
        name: 'group'
      },
      {
        name: 'member'
      },
      {
        name: 'stat'
      },
      {
        name: 'absent'
      }
    ],
    '/admin/api/attributes': [
      {
        name: 'name',
        uniq:'true',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp:'^[a-zA-Z\\d]+$',
        invalid: 'Only alphabets and numbers are allowed',
        model:'group'
      },
      {
        name: 'members',
        uniq:'false',
        required:'false',
        type:'children',
        relation:'member',
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'group'
      },
      {
        name: 'owner',
        uniq:'false',
        required:'false',
        type:'instance',
        relation:'member',
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'group'
      },
      {
        name: 'icon',
        uniq:'false',
        required:'false',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'group'
      },
      {
        name: 'name',
        uniq:'true',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp:'^[a-zA-Z\\d\\-]+$',
        invalid: 'Only alphabets and numbers and hiphen are allowed',
        model:'member'
      },
      {
        name: 'group',
        uniq:'false',
        required:'false',
        type:'parent',
        relation:'group',
        relationAttribute:'members',
        regexp: null,
        invalid: null,
        model:'member'
      },
      {
        name: 'absents',
        uniq:'false',
        required:'false',
        type:'children',
        relation:'absent',
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'member'
      },
      {
        name: 'icon',
        uniq:'false',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'member'
      },
      {
        name: 'key',
        uniq:'true',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp:'^[a-z]+$',
        invalid: 'Only alphabets are allowed',
        model:'stat'
      },
      {
        name: 'text',
        uniq:'false',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'stat'
      },
      {
        name: 'member',
        uniq:'true',
        required:'true',
        type:'parent',
        relation:'member',
        relationAttribute:'absents',
        regexp: null,
        invalid: null,
        model:'absent'
      },
      {
        name: 'date',
        uniq:'true',
        required:'true',
        type:'date',
        relation: null,
        relationAttribute: null,
        regexp:'^\\d\\d\\d\\d-\\d\\d-\\d\\d$',
        invalid: 'Format should be YYYY-MM-DD',
        model:'absent'
      },
      {
        name: 'stat',
        uniq:'false',
        required:'true',
        type:'instance',
        relation:'stat',
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'absent'
      },
      {
        name: 'start',
        uniq:'false',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp:'^\\d\\d:\\d\\d$',
        invalid: 'Format should be HH:MM',
        model:'absent'
      },
      {
        name: 'end',
        uniq:'false',
        required:'true',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp:'^\\d\\d:\\d\\d$',
        invalid: 'Format should be HH:MM',
        model:'absent'
      },
      {
        name: 'reason',
        uniq:'false',
        required:'false',
        type:'string',
        relation: null,
        relationAttribute: null,
        regexp: null,
        invalid: null,
        model:'absent'
      }
    ]
  },
  record: {
    '/groups': [
      {
        name: 'UXD'
      },
      {
        name: 'Platform'
      }
    ],
    '/members': [
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
    '/stats': [
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
    '/absents': [
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
