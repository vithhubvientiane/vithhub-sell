/**
 * booth-data.js  —  VITH HUB 2026 · Single Source of Truth
 * ─────────────────────────────────────────────────────────
 * status: 'available' | 'reserved' | 'sold'
 * Used by: floorplan.html, booth.html
 */

const BOOTH_DATA = {

  // ── Zone A : Franchise Premium ──────────────────────────
  A01:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'var(--A)',icon:'☕',label:'Franchise',status:'available'},
  A02:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'var(--A)',icon:'☕',label:'Franchise',status:'available'},
  A03:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'var(--A)',icon:'☕',label:'Franchise',status:'available'},
  A04:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'var(--A)',icon:'☕',label:'Franchise',status:'available'},
  A05:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'var(--A)',icon:'☕',label:'Franchise',status:'reserved'},
  A06:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'var(--A)',icon:'☕',label:'Franchise',status:'available'},
  A07:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'#4a90d9',icon:'☕',label:'Franchise Premium',status:'available'},
  A08:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'#4a90d9',icon:'☕',label:'Franchise Premium',status:'available'},
  A09:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'#4a90d9',icon:'☕',label:'Franchise Premium',status:'available'},
  A10:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'#4a90d9',icon:'☕',label:'Franchise Premium',status:'available'},
  A11:{zone:'Franchise Zone A',size:'2×3m',price:18000,color:'#4a90d9',icon:'☕',label:'Franchise Premium',status:'reserved'},

  // ── Zone B : Standard Booth ─────────────────────────────
  B01:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B02:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B03:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B04:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B05:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B06:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'reserved'},
  B07:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B08:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B09:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B10:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'reserved'},
  B11:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B12:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B13:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B14:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B15:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B16:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B17:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'reserved'},
  B18:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B19:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B20:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B21:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B22:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'reserved'},
  B23:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B24:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'reserved'},
  B25:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'available'},
  B26:{zone:'Standard Booth B',size:'3×3m',price:15000,color:'var(--B)',icon:'🏪',label:'Standard',status:'sold'},

  // ── Zone P : Premium ────────────────────────────────────
  P01:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'available'},
  P02:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'available'},
  P03:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'available'},
  P04:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'reserved'},
  P05:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'available'},
  P06:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'available'},
  P07:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'sold'},
  P08:{zone:'Premium Zone P',size:'3×6m',price:25000,color:'var(--P)',icon:'⭐',label:'Premium',status:'available'},

  // ── Zone C : Food Dry Zone ──────────────────────────────
  C01:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C02:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C03:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C04:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C05:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C06:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C07:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'reserved'},
  C08:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C09:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C10:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C11:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C12:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C13:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C14:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'reserved'},
  C15:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C16:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C17:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C18:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C19:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'reserved'},
  C20:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},
  C21:{zone:'Food Dry Zone C',size:'2×3m',price:12000,color:'var(--C)',icon:'🍱',label:'Food Dry',status:'available'},

  // ── Zone D : Food Center ────────────────────────────────
  D01:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D02:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D03:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D04:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'reserved'},
  D05:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D06:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D07:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D08:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D09:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D10:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D11:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'reserved'},
  D12:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D13:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D14:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D15:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D16:{zone:'Food Center Thai',size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D17:{zone:'Food Center Lao', size:'2×3m',price:12000,color:'#d97706',icon:'🍽️',label:'Food Center',status:'available'},
  D18:{zone:'Food Center Lao', size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D19:{zone:'Food Center Lao', size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'reserved'},
  D20:{zone:'Food Center Lao', size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},
  D21:{zone:'Food Center Lao', size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'sold'},
  D22:{zone:'Food Center Lao', size:'2×3m',price:12000,color:'var(--D)',icon:'🍽️',label:'Food Center',status:'available'},

  // ── Zone N : Nation Booth ───────────────────────────────
  N01:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N02:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N03:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N04:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N05:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N06:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N07:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N08:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N09:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'reserved'},
  N10:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},
  N11:{zone:'Nation Booth N',size:'3×3m',price:15000,color:'var(--N)',icon:'🌏',label:'Nation',status:'available'},

};

/* Zone metadata — used by both pages */
const ZONE_NAMES = {
  A:'Franchise Zone A',
  B:'Standard Booth B',
  P:'Premium Zone P',
  N:'Nation Booth N',
  C:'Food Dry Zone C',
  D:'Food Center D'
};

const ZONE_PRICE = {A:18000, B:15000, P:25000, N:15000, C:12000, D:12000};
const ZONE_COLOR = {A:'#1d4ed8', B:'#6d28d9', P:'#b45309', N:'#047857', C:'#c2410c', D:'#4d7c0f'};
