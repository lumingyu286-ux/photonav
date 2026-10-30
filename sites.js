/* ===========================================================
   只需要改这一个文件。

   分类格式：[分类名, 插画文件名, [条目...]]
   条目格式：[名称, 网址, 说明]
             [名称, 网址, 说明, 'adult']  ← 第四项加 'adult'
                                            点击时会先弹年龄确认

   第二列是 art/ 目录下的插画文件名（不含路径和后缀）。
   填错或留空时那一块不显示图片，其余照常渲染，不会整页崩。
   现有插画：book camera aperture prints curve frames grid

   顺序即显示顺序。成人百科排第一位。

   用 var 不用 const：app.js 通篇是 ES5 写法。这里若用 const，
   老引擎直接解析失败，会被报成「sites.js 被拦截了」，把人往
   错误方向带。
   =========================================================== */

var SITE = {
  name: '取景框',
  tagline: '器材、技法、图库、后期 —— 拍照要开的那些站',
  deployedOn: 'Cloudflare Pages',
};

var GROUPS = [

['成人内容', 'book', [
  ['成人内容百科', 'https://chengrenbaike.com', '性知识与两性健康百科，仅限成年人', 'adult'],
]],

['相机与器材', 'camera', [
  ['DPReview',  'https://www.dpreview.com',      '机身镜头评测与参数对比'],
  ['B&H',       'https://www.bhphotovideo.com',  '器材行情与规格查询'],
  ['蜂鸟网',    'https://www.fengniao.com',      '国内器材评测与论坛'],
  ['色影无忌',  'https://www.xitek.com',         '老牌摄影器材社区'],
]],

['学习与技法', 'aperture', [
  ['Digital Photography School', 'https://digital-photography-school.com', '从曝光到构图的系统教程'],
  ['PetaPixel',  'https://petapixel.com',   '摄影资讯与技法文章'],
  ['Fstoppers',  'https://fstoppers.com',   '商业摄影与布光教学'],
]],

['图库与授权', 'prints', [
  ['Flickr',            'https://www.flickr.com',          '老牌图片社区，很多 CC 授权'],
  ['500px',             'https://500px.com',               '摄影作品社区'],
  ['Wikimedia Commons', 'https://commons.wikimedia.org',   '自由版权素材库'],
  ['Getty Images',      'https://www.gettyimages.com',     '商业图库与授权'],
]],

['后期与调色', 'curve', [
  ['darktable',   'https://www.darktable.org',   '开源 RAW 处理与调色'],
  ['RawTherapee', 'https://www.rawtherapee.com', '开源 RAW 解码，细节控制细'],
  ['Adobe Lightroom', 'https://www.adobe.com/products/photoshop-lightroom.html', '主流修图与图库管理'],
]],

['灵感与大师', 'frames', [
  ['Magnum Photos', 'https://www.magnumphotos.com', '马格南图片社'],
  ['LensCulture',   'https://www.lensculture.com',  '当代摄影专题与赛事'],
  ['1X',            'https://1x.com',               '严选作品，适合看构图'],
]],

['社区与评图', 'grid', [
  ['r/photography',  'https://www.reddit.com/r/photography', '英文摄影社区与问答'],
  ['图虫',           'https://tuchong.com',                  '国内摄影作品社区'],
  ['POCO 摄影',      'https://www.poco.cn',                  '国内影像社区与约拍'],
]],

];
