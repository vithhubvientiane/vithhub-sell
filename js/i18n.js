/* ════════════════════════════════════════════════════════
   VITH HUB 2026 — i18n.js
   Dynamic translation: EN / TH / LA / CN
   Usage: add data-i18n="key" to any element
          call initI18n() after DOM ready
════════════════════════════════════════════════════════ */

const TRANSLATIONS = {
  EN: {
    // Nav
    nav_home:       'Home',
    nav_exhibition: 'Exhibition',
    nav_booking:    'Booth Booking',
    nav_visitors:   'Visitors',
    nav_exhibitors: 'Exhibitors',
    nav_venue:      'Venue',
    nav_contact:    'Contact',
    btn_book_booth: '🏪 Book Booth',
    btn_visit:      '🎟️ Visit',

    // Hero
    hero_eyebrow:  '✦ International Trade Exhibition',
    hero_title:    'VITH HUB\nInternational\nExhibition 2026',
    hero_date:     '28 May – 1 June 2026',
    hero_venue:    'Big C Vientiane, Laos PDR',
    cta_book:      '🏪 Book a Booth',
    cta_visit:     '🎟️ Visit Exhibition',
    cta_info:      'Exhibitor Info →',

    // Stats
    stat_booths:   '120+\nBooths',
    stat_countries:'5\nCountries',
    stat_visitors: '5,000+\nVisitors',
    stat_days:     '6\nDays',
    stat_commission:'0%\nCommission',

    // Sections
    sec_about:          'About the Exhibition',
    sec_zones:          'Exhibition Zones',
    sec_pavilions:      'Country Pavilions',
    sec_exhibitors:     'Featured Exhibitors',
    sec_floorplan:      'Interactive Floor Plan',
    sec_sponsors:       'Partners & Sponsors',
    sec_cta_title:      'Ready to Join VITH HUB 2026?',
    sec_cta_sub:        '120+ booths · 6 zones · 0% commission · Free logistics Thailand → Laos.',

    // Floorplan
    fp_title:           'Exhibition Floor Plan',
    fp_sub:             '📅 28 May–1 Jun 2026 · Big C Vientiane · Click a booth to view details',
    fp_available:       'Available',
    fp_reserved:        'Reserved',
    fp_sold:            'Sold Out',
    fp_click_hint:      'Click booth to select →',
    fp_sel_empty:       'Click a booth on the map\nto see details and pricing',
    fp_zone_pricing:    'Zone Pricing',
    fp_availability:    'Availability',

    // Booth
    booth_book_now:     '✦ Reserve Booth',
    booth_details:      'View Full Details & Form',
    booth_sold_msg:     'Booth ✗ Sold Out',
    booth_reserved_msg: 'Booth 🔒 Reserved',

    // Visit
    visit_title:        'Visit VITH HUB 2026',
    visit_sub:          'Free entry. Register online for fast-track access.',
    visit_free:         '✓ FREE ADMISSION',
    visit_register:     '🎟️ Register Now — It\'s Free',
    visit_success:      'Registration Complete!',

    // Contact
    contact_send:       '📩 Send Message',
    contact_success:    'Message Sent!',

    // Footer
    footer_organized:   'Connecting Thai SMEs with global buyers and investors across the Mekong region.',
    footer_copy:        '© 2026 VITH HUB International Exhibition · Big C Vientiane, Laos PDR',
  },

  TH: {
    nav_home:       'หน้าหลัก',
    nav_exhibition: 'นิทรรศการ',
    nav_booking:    'จองบูท',
    nav_visitors:   'ผู้เข้าชม',
    nav_exhibitors: 'ผู้แสดงสินค้า',
    nav_venue:      'สถานที่',
    nav_contact:    'ติดต่อ',
    btn_book_booth: '🏪 จองบูท',
    btn_visit:      '🎟️ เข้าชม',

    hero_eyebrow:  '✦ งานแสดงสินค้านานาชาติ',
    hero_title:    'VITH HUB\nงานแสดงสินค้า\nนานาชาติ 2026',
    hero_date:     '28 พ.ค. – 1 มิ.ย. 2569',
    hero_venue:    'บิ๊กซี เวียงจันทน์ สปป.ลาว',
    cta_book:      '🏪 จองบูทของคุณ',
    cta_visit:     '🎟️ ลงทะเบียนเข้าชม',
    cta_info:      'ข้อมูลผู้แสดงสินค้า →',

    stat_booths:    '120+\nบูท',
    stat_countries: '5\nประเทศ',
    stat_visitors:  '5,000+\nผู้เข้าชม',
    stat_days:      '6\nวัน',
    stat_commission:'0%\nค่าคอมมิชชัน',

    sec_about:       'เกี่ยวกับงาน',
    sec_zones:       'โซนนิทรรศการ',
    sec_pavilions:   'ศาลาประจำชาติ',
    sec_exhibitors:  'ผู้แสดงสินค้าเด่น',
    sec_floorplan:   'แผนผังบูท',
    sec_sponsors:    'พาร์ทเนอร์และสปอนเซอร์',
    sec_cta_title:   'พร้อมเข้าร่วม VITH HUB 2026 แล้วหรือยัง?',
    sec_cta_sub:     '120+ บูท · 6 โซน · 0% ค่าคอมมิชชัน · โลจิสติกส์ฟรี ไทย → ลาว',

    fp_title:        'แผนผังนิทรรศการ',
    fp_sub:          '📅 28 พ.ค.–1 มิ.ย. 2569 · บิ๊กซี เวียงจันทน์ · คลิกบูทเพื่อดูรายละเอียด',
    fp_available:    'ว่างอยู่',
    fp_reserved:     'ถูกจองแล้ว',
    fp_sold:         'ขายหมดแล้ว',
    fp_click_hint:   'คลิกบูทเพื่อเลือก →',
    fp_sel_empty:    'คลิกบูทบนแผนผัง\nเพื่อดูรายละเอียดและราคา',
    fp_zone_pricing: 'ราคาตามโซน',
    fp_availability: 'สถานะบูท',

    booth_book_now:     '✦ จองบูท',
    booth_details:      'ดูรายละเอียดและแบบฟอร์มเต็ม',
    booth_sold_msg:     'บูทนี้ขายหมดแล้ว ✗',
    booth_reserved_msg: 'บูทนี้ถูกจองแล้ว 🔒',

    visit_title:     'เข้าชม VITH HUB 2026',
    visit_sub:       'เข้าฟรี ลงทะเบียนออนไลน์เพื่อรับบัตรผ่านดิจิตัล',
    visit_free:      '✓ เข้าชมฟรี',
    visit_register:  '🎟️ ลงทะเบียนฟรีเดี๋ยวนี้',
    visit_success:   'ลงทะเบียนสำเร็จ!',

    contact_send:    '📩 ส่งข้อความ',
    contact_success: 'ส่งข้อความแล้ว!',

    footer_organized:'เชื่อมโยง SME ไทยกับผู้ซื้อและนักลงทุนทั่วโลกในภูมิภาคแม่น้ำโขง',
    footer_copy:     '© 2026 VITH HUB งานแสดงสินค้านานาชาติ · บิ๊กซี เวียงจันทน์ สปป.ลาว',
  },

  LA: {
    nav_home:       'ໜ້າຫຼັກ',
    nav_exhibition: 'ງານວາງສະແດງ',
    nav_booking:    'ຈອງບູດ',
    nav_visitors:   'ຜູ້ຊົມ',
    nav_exhibitors: 'ຜູ້ວາງສະແດງ',
    nav_venue:      'ສະຖານທີ່',
    nav_contact:    'ຕິດຕໍ່',
    btn_book_booth: '🏪 ຈອງບູດ',
    btn_visit:      '🎟️ ເຂົ້າຊົມ',

    hero_eyebrow:  '✦ ງານວາງສະແດງການຄ້ານານາຊາດ',
    hero_title:    'VITH HUB\nງານວາງສະແດງ\nນານາຊາດ 2026',
    hero_date:     '28 ພ.ພ. – 1 ມິ.ຖ. 2026',
    hero_venue:    'ບິກຊີ ວຽງຈັນ, ສປປ ລາວ',
    cta_book:      '🏪 ຈອງບູດຂອງທ່ານ',
    cta_visit:     '🎟️ ລົງທະບຽນເຂົ້າຊົມ',
    cta_info:      'ຂໍ້ມູນຜູ້ວາງສະແດງ →',

    stat_booths:    '120+\nບູດ',
    stat_countries: '5\nປະເທດ',
    stat_visitors:  '5,000+\nຜູ້ຊົມ',
    stat_days:      '6\nວັນ',
    stat_commission:'0%\nຄ່ານາຍໜ້າ',

    sec_about:       'ກ່ຽວກັບງານ',
    sec_zones:       'ໂຊນວາງສະແດງ',
    sec_pavilions:   'ສາລາປະຈຳຊາດ',
    sec_exhibitors:  'ຜູ້ວາງສະແດງເດັ່ນ',
    sec_floorplan:   'ແຜນຜັງບູດ',
    sec_sponsors:    'ຄູ່ຮ່ວມງານ',
    sec_cta_title:   'ພ້ອມເຂົ້າຮ່ວມ VITH HUB 2026 ແລ້ວບໍ?',
    sec_cta_sub:     '120+ ບູດ · 6 ໂຊນ · 0% ຄ່ານາຍໜ້າ · ໂລຈິສຕິກຟຣີ ໄທ → ລາວ',

    fp_title:        'ແຜນຜັງງານວາງສະແດງ',
    fp_sub:          '📅 28 ພ.ພ.–1 ມິ.ຖ. 2026 · ບິກຊີ ວຽງຈັນ · ກົດບູດເພື່ອເບິ່ງລາຍລະອຽດ',
    fp_available:    'ຫວ່າງ',
    fp_reserved:     'ຈອງແລ້ວ',
    fp_sold:         'ຂາຍໝົດ',
    fp_click_hint:   'ກົດບູດເພື່ອເລືອກ →',
    fp_sel_empty:    'ກົດບູດໃນແຜນຜັງ\nເພື່ອເບິ່ງລາຍລະອຽດ',
    fp_zone_pricing: 'ລາຄາຕາມໂຊນ',
    fp_availability: 'ສະຖານະບູດ',

    booth_book_now:     '✦ ຈອງບູດ',
    booth_details:      'ເບິ່ງລາຍລະອຽດ',
    booth_sold_msg:     'ບູດນີ້ຂາຍໝົດແລ້ວ ✗',
    booth_reserved_msg: 'ບູດນີ້ຖືກຈອງແລ້ວ 🔒',

    visit_title:     'ເຂົ້າຊົມ VITH HUB 2026',
    visit_sub:       'ເຂົ້າຟຣີ ລົງທະບຽນອອນໄລນ໌',
    visit_free:      '✓ ເຂົ້າຊົມຟຣີ',
    visit_register:  '🎟️ ລົງທະບຽນຟຣີ',
    visit_success:   'ລົງທະບຽນສຳເລັດ!',

    contact_send:    '📩 ສົ່ງຂໍ້ຄວາມ',
    contact_success: 'ສົ່ງຂໍ້ຄວາມແລ້ວ!',

    footer_organized:'ເຊື່ອມຕໍ່ SME ໄທກັບຜູ້ຊື້ ແລະ ນັກລົງທຶນທົ່ວໂລກໃນພາກພື້ນແມ່ນ້ຳຂອງ',
    footer_copy:     '© 2026 VITH HUB ງານວາງສະແດງນານາຊາດ · ບິກຊີ ວຽງຈັນ ສປປ ລາວ',
  },

  CN: {
    nav_home:       '首页',
    nav_exhibition: '展览会',
    nav_booking:    '预订展位',
    nav_visitors:   '参观者',
    nav_exhibitors: '参展商',
    nav_venue:      '场地',
    nav_contact:    '联系我们',
    btn_book_booth: '🏪 预订展位',
    btn_visit:      '🎟️ 参观',

    hero_eyebrow:  '✦ 国际贸易展览会',
    hero_title:    'VITH HUB\n国际展览会\n2026',
    hero_date:     '2026年5月28日 – 6月1日',
    hero_venue:    '老挝万象大C购物中心',
    cta_book:      '🏪 预订展位',
    cta_visit:     '🎟️ 参观注册',
    cta_info:      '参展商信息 →',

    stat_booths:    '120+\n展位',
    stat_countries: '5\n国家',
    stat_visitors:  '5,000+\n观众',
    stat_days:      '6\n天',
    stat_commission:'0%\n佣金',

    sec_about:       '展览概况',
    sec_zones:       '展览区域',
    sec_pavilions:   '国家展馆',
    sec_exhibitors:  '精选参展商',
    sec_floorplan:   '展位平面图',
    sec_sponsors:    '合作伙伴与赞助商',
    sec_cta_title:   '准备加入VITH HUB 2026？',
    sec_cta_sub:     '120+展位 · 6区域 · 0%佣金 · 泰国→老挝免费物流',

    fp_title:        '展览平面图',
    fp_sub:          '📅 2026年5月28日–6月1日 · 万象大C · 点击展位查看详情',
    fp_available:    '可预订',
    fp_reserved:     '已预订',
    fp_sold:         '已售出',
    fp_click_hint:   '点击展位选择 →',
    fp_sel_empty:    '点击平面图上的展位\n查看详情和价格',
    fp_zone_pricing: '区域价格',
    fp_availability: '展位状态',

    booth_book_now:     '✦ 预订展位',
    booth_details:      '查看完整详情和表格',
    booth_sold_msg:     '此展位已售出 ✗',
    booth_reserved_msg: '此展位已预订 🔒',

    visit_title:     '参观 VITH HUB 2026',
    visit_sub:       '免费入场，在线注册获取数字通行证',
    visit_free:      '✓ 免费入场',
    visit_register:  '🎟️ 立即免费注册',
    visit_success:   '注册成功！',

    contact_send:    '📩 发送消息',
    contact_success: '消息已发送！',

    footer_organized:'连接泰国中小企业与湄公河地区的全球买家和投资者',
    footer_copy:     '© 2026 VITH HUB 国际展览会 · 老挝万象大C购物中心',
  }
};

let currentLang = localStorage.getItem('vith-lang') || 'EN';

function t(key){ return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS['EN'][key] || key; }

function applyTranslations(){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
      el.placeholder = val;
    } else {
      el.innerHTML = val.replace(/\n/g,'<br>');
    }
  });
  // Update lang button active state
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  // Update html lang attr
  document.documentElement.lang = currentLang === 'CN' ? 'zh' : currentLang === 'TH' ? 'th' : currentLang === 'LA' ? 'lo' : 'en';
}

function switchLang(lang){
  currentLang = lang;
  localStorage.setItem('vith-lang', lang);
  applyTranslations();
}

function initI18n(){
  currentLang = localStorage.getItem('vith-lang') || 'EN';
  applyTranslations();
}

// Auto-init after DOM ready
if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
window.switchLang_i18n = switchLang;
