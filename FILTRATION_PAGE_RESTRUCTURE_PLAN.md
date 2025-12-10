# Filtration Page Restructure Plan

## Overview
This document outlines the required changes to transform the filtration page (`/services/filtration/page.js`) to follow Stripe's narrative structure and match the UI patterns from the organic-treatment page.

---

## CURRENT PAGE STRUCTURE (What exists now)

1. **Hero Section** ✅ (Already updated)
   - Title: "Elimina la borra de todas tus etapas de proceso"
   - Body: Mentions both SX and refineries
   - CTA button

2. **Benefits Section** ✅ (Already updated)
   - 4 benefits with 3-ball dividers (matching organic-treatment)
   - Aumenta eficiencia, Recupera valor, Recupera capacidad, Reduce costos

3. **Equipment Section** ⚠️ (Needs rework)
   - Has EquipmentBenefits component with 3 expandable items
   - Features: pipeta larga, mangueras largas, impacto térmico
   - Has "Modular Configuration" sub-section
   - **PROBLEM**: Features are copper-specific, need to work for both industries

4. **Industries Section** ❌ (Needs complete rework)
   - Currently: Simple 3-card grid (Copper, Zinc, Crude Oil)
   - **SHOULD BE**: Expandable accordion like organic-treatment's EquipmentBenefits

5. **LODOS INDUSTRIALES Section** ⚠️ (Petroleum-only)
   - Good content but isolated to crude oil
   - Needs integration into unified narrative

6. **"Tu concentrado en movimiento" Section** ❌ (Wrong context)
   - This is about concentrate dehydration for TML compliance
   - NOT about borra filtration
   - **REMOVE or move to concentrate-dehydration page**

7. **Process Steps Section** ⚠️ (Generic)
   - 4 steps: Conexión, Filtración, Deshidratación, Recuperación
   - Could be improved to reference both industries

8. **CTA Section** ✅ (OK)

---

## TARGET PAGE STRUCTURE (What we need)

Following Stripe's narrative structure and organic-treatment UI patterns:

### Section 1: HERO ✅
- Already done correctly

### Section 2: KEY BENEFITS ✅
- Already done with 4 benefits and 3-ball dividers

### Section 3: TWO INDUSTRIES (Stripe theme deep-dive)
**UI Pattern**: Match organic-treatment's EquipmentBenefits component
- Expandable accordion on left
- Image changes on right based on selection

**Content for each industry**:

#### A. COBRE (SX Borras)
- **Title**: "Plantas SX de Cobre"
- **Description**: Details about borra problems in SX:
  - Acumulación en etapas E1/E2/S1/S2
  - Contaminación por sólidos finos
  - Problemas de arrastre entre etapas
  - Consumo excesivo de reactivos/energía/agua
- **Key stats**: 95% borra sale seca, 90% recuperación orgánico
- **Image**: Copper SX equipment photo

#### B. PETRÓLEO (Lodos de Refinería)
- **Title**: "Refinerías y Petróleo"
- **Description**: Details about refinery sludge:
  - Múltiples fuentes: fenólica, fenoles, T-2402
  - Alto contenido de hidrocarburos recuperables (up to 67%)
  - Reducción de volumen 70-85%
- **Key stats**: From ENAP PDF
- **Image**: Refinery/crude oil equipment photo

### Section 4: EQUIPMENT BENEFITS (Expandable)
**UI Pattern**: Keep existing EquipmentBenefits component but UPDATE content to be industry-agnostic or clearly applicable to both.

**3 Features to highlight**:

1. **Extracción dirigida a la cota exacta** ✅
   - Works for both: borra in SX tanks OR sludge layers in refinery tanks
   - Pipeta larga identifies contamination zone

2. **Mangueras de largo alcance** ✅
   - Works for both: compact SX plants OR refinery tank farms
   - External installation, minimal operational disruption

3. **Operación sin parar la planta** (NEW - replace "impacto térmico")
   - Thermal impact is copper-specific
   - Replace with: "Sistema 100% autónomo que no utiliza equipamiento de planta cliente"
   - Works for both industries

### Section 5: THEME - PROTEGE LA CALIDAD (New section - Arrastre Prevention)
**Content**: How borra removal prevents contamination between stages

**For Copper SX**:
- Arrastre de orgánico a fase acuosa → contaminación EW
- Arrastre de acuoso a fase orgánica → dilución extractante
- Sólidos finos que estabilizan emulsiones

**For Crude Oil**:
- Water-oil emulsion stabilization
- Sediment carryover between tanks
- Product quality degradation

### Section 6: DISPOSAL BENEFIT
**Unified theme**: Both industries benefit from dry disposal

**Copper**: Borra sale 95% seca → fácil transporte y disposición
**Crude Oil**: Volumen reducido 70-85% → menor costo disposición

### Section 7: PROCESS STEPS ⚠️ (Simplify)
Keep 4 steps but make descriptions work for both industries

### Section 8: CTA ✅
Keep as-is

---

## SPECIFIC CHANGES REQUIRED

### Change 1: Update EquipmentBenefits Component
**File location**: Lines 9-105

**What to change**:
```jsx
// Feature 3: Replace "Mínimo impacto térmico" with something universal
{
  title: 'Operación sin interferir tu planta',
  description: 'Sistema 100% autónomo que no utiliza equipamiento de planta cliente. Bombas, tuberías y controles propios. Sin modificar permisos ni RCA. Instalación en 48 horas, operación inmediata.',
  icon: Renew, // or another appropriate icon
  image: '/appropriate_image.jpg'
}
```

### Change 2: Create IndustriesAccordion Component (NEW)
**Pattern to follow**: EquipmentBenefits from organic-treatment (lines 94-190)

```jsx
function IndustriesAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const industries = [
    {
      title: 'Plantas SX de Cobre',
      description: 'Filtración de borras en etapas de extracción y stripping...',
      details: [
        'Borra acumulada en E1, E2, S1, S2',
        'Sólidos finos que contaminan el orgánico',
        'Arrastre entre fases',
        '95% de la borra sale seca'
      ],
      stats: { recovery: '90%', dryness: '95%' },
      icon: CuIcon,
      image: '/copper_sx_equipment.jpg'
    },
    {
      title: 'Refinerías y Petróleo',
      description: 'Tratamiento de lodos industriales con alto contenido HC...',
      details: [
        'Fondos de tanque, separadores API',
        'Hasta 67% hidrocarburos recuperables',
        'Reducción de volumen 70-85%',
        'Cumplimiento ambiental'
      ],
      stats: { recovery: '90%', volumeReduction: '85%' },
      icon: Anchor,
      image: '/refinery_equipment.jpg'
    }
  ]
  // ... expandable UI matching EquipmentBenefits pattern
}
```

### Change 3: REMOVE "Tu concentrado en movimiento" Section
**Lines to remove**: 582-784
This section is about concentrate dehydration for maritime transport (TML compliance). It does NOT belong on the filtration/borra page.

### Change 4: Integrate LODOS INDUSTRIALES content
Instead of a separate petroleum section, fold the petroleum value proposition into the new Industries accordion.

### Change 5: Add Arrastre Prevention Theme Section (NEW)
Between Equipment and Process sections, add a themed section about quality protection:

```jsx
{/* THEME: PROTEGE LA CALIDAD DE TU PRODUCTO */}
<section className="border-b border-gray-200 bg-gray-50">
  <div className="max-w-7xl mx-auto px-8 py-24 lg:py-32">
    <div className="max-w-3xl mb-12">
      <h2>Protege la calidad de tu producto</h2>
      <p>La borra no solo ocupa espacio. Contamina activamente cada etapa...</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Left: Copper - Arrastre problems */}
      {/* Right: Crude Oil - Emulsion/quality problems */}
    </div>
  </div>
</section>
```

### Change 6: Simplify Process Section
Make the 4 steps work for both industries by using neutral language:
- Conexión → "Integración con tu sistema existente"
- Filtración → "Separación de contaminantes"
- Deshidratación → "Reducción de humedad"
- Recuperación → "Valor recuperado, residuo minimizado"

---

## ORDER OF IMPLEMENTATION

1. **Delete** "Tu concentrado en movimiento" section (lines 582-784)
2. **Create** new IndustriesAccordion component
3. **Replace** current Industries grid with IndustriesAccordion
4. **Update** EquipmentBenefits feature #3 (thermal → operational autonomy)
5. **Add** new Arrastre Prevention theme section
6. **Fold** LODOS INDUSTRIALES content into petroleum accordion item
7. **Update** Process section descriptions
8. **Test** all changes

---

## IMAGES NEEDED

For the Industries accordion:
- Copper SX equipment photo (use existing or `/fotos spence/` images)
- Refinery/petroleum equipment photo (may need to source)

---

## SUMMARY TABLE

| Section | Current State | Target State | Action |
|---------|--------------|--------------|--------|
| Hero | ✅ Done | ✅ Done | None |
| Benefits | ✅ Done | ✅ Done | None |
| Equipment | ⚠️ Copper-specific | Universal | Update feature #3 |
| Industries | ❌ Simple grid | Expandable accordion | Replace completely |
| LODOS | Standalone | Integrated | Fold into accordion |
| Concentrado | Wrong page | Remove | DELETE |
| Arrastre Theme | Missing | New section | ADD |
| Process | Generic | Improved | Minor updates |
| CTA | ✅ OK | ✅ OK | None |
