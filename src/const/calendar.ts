/**
 * カレンダーに関する定数
 */
export default {
  DAY_TYPE: {
    MON: '月',
    TUE: '火',
    WED: '水',
    THU: '木',
    FRI: '金',
    SAT: '土',
    SUN: '日',
  },
  DAYS_WEEK: 7,
  FORMAT: {
    // 参照： https://date-fns.org/v1.30.1/docs/format
    MONTH: {
      HEADER: 'M',
      DAYS: 'dd',
      CELLS: 'D',
    },
    DATE: {
      DEFAULT: 'YYYY/MM/DD',
      WITH_DAY_OF_WEEK: 'YYYY/MM/DD(ddd)',
      YEAR_MONTH: 'YYYYMM',
    },
  },
}
