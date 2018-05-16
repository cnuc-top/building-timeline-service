// 贡献类型
const TIMELINE_TYPE = {
  DESIGN: 1,
  PROCESS: 2
}

const TIMELINE_TYPE_DETAIL = [
  {
    id: TIMELINE_TYPE.DESIGN,
    name: '效果图'
  },
  {
    id: TIMELINE_TYPE.PROCESS,
    name: '进度图'
  }
]

// 贡献类型
const ATTACHMENT_TYPE = {
  IMAGE: 1,
  VIDEO: 2
}

// SVG 类型
const SVGFILE_TYPE = {
  STRUCTURE: 1,
  SCOUNDS: 2
}

const SVGFILE_TYPE_DETAIL = [
  {
    id: SVGFILE_TYPE.STRUCTURE,
    name: '主题结构'
  },
  {
    id: SVGFILE_TYPE.SCOUNDS,
    name: '二次结构'
  }
]

const WEBLINK_TYPE = {
  DEVELOPERS: 1,
  DESIGNER: 2,
  BUILDER: 3,
  BBS: 4
}

const WEBLINK_TYPE_DETAIL = [
  {
    id: WEBLINK_TYPE.DEVELOPERS,
    name: '开发商'
  },
  {
    id: WEBLINK_TYPE.DESIGNER,
    name: '设计商'
  },
  {
    id: WEBLINK_TYPE.BUILDER,
    name: '建设商'
  },
  {
    id: WEBLINK_TYPE.BBS,
    name: '论坛'
  }
]

// 公司类型
const COMPANY_TYPE = {
  DEVELOPERS: 1,
  DESIGNER: 2,
  BUILDER: 3
}

const COMPANY_TYPE_DETAIL = [
  {
    id: COMPANY_TYPE.DEVELOPERS,
    name: '开发商'
  },
  {
    id: COMPANY_TYPE.DESIGNER,
    name: '设计商'
  },
  {
    id: COMPANY_TYPE.BUILDER,
    name: '建设商'
  }
]

module.exports = {
  TIMELINE_TYPE,
  TIMELINE_TYPE_DETAIL,
  ATTACHMENT_TYPE,
  SVGFILE_TYPE,
  SVGFILE_TYPE_DETAIL,
  WEBLINK_TYPE,
  WEBLINK_TYPE_DETAIL,
  COMPANY_TYPE,
  COMPANY_TYPE_DETAIL
}
