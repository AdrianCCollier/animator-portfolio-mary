export type Category = 'Character' | 'VFX' | 'Game Art' | 'Arch Viz'

export interface BreakdownItem {
  type: 'image' | 'vimeo'
  src: string // image path or Vimeo ID
  caption: string
}

export interface Project {
  id: string
  title: string
  category: Category
  shortDescription: string
  fullDescription: string
  software: string[]
  vimeoId?: string          // main clip Vimeo ID
  thumbnailUrl: string      // static thumbnail image
  breakdown: BreakdownItem[]
  featured?: boolean
  year: number
}

export const projects: Project[] = [
  {
    id: 'echoes-of-anima',
    title: 'Echoes of Anima',
    category: 'Character',
    shortDescription: 'Full character performance with facial animation and body mechanics for an original short film.',
    fullDescription:
      'A 45-second acting shot developed as my senior thesis piece. The character — an elderly woman receiving a letter — required subtle facial performance, detailed hand animation, and weight-grounded body mechanics. Rigged and animated entirely in Maya, rendered in Arnold.',
    software: ['Maya', 'Arnold', 'ZBrush', 'After Effects'],
    vimeoId: '76979871',
    thumbnailUrl: '', // TODO: add thumbnail image to public/thumbnails/
    featured: true,
    year: 2024,
    breakdown: [
      { type: 'image', src: '/breakdown/echoes-wireframe.jpg', caption: 'Wireframe — topology optimised for facial deformation' },
      { type: 'image', src: '/breakdown/echoes-reference.jpg', caption: 'Reference board — real performance references used for timing' },
      { type: 'image', src: '/breakdown/echoes-clay.jpg', caption: 'Clay render — lighting pass stripped to evaluate shape reads' },
      { type: 'vimeo', src: '76979871', caption: 'Final rendered piece' },
    ],
  },
  {
    id: 'city-collapse',
    title: 'City Collapse',
    category: 'VFX',
    shortDescription: 'Large-scale building destruction simulation using Houdini RBD solver and custom constraint networks.',
    fullDescription:
      'A destruction sequence simulating the collapse of a mid-rise concrete building. Built in Houdini using RBD packed primitives with custom glue and spring constraints. Debris, dust, and secondary motion composited in Nuke over a live-action plate.',
    software: ['Houdini', 'Nuke', 'After Effects'],
    vimeoId: '76979871',
    thumbnailUrl: '', // TODO: add thumbnail image to public/thumbnails/
    year: 2024,
    breakdown: [
      { type: 'image', src: '/breakdown/collapse-constraints.jpg', caption: 'Constraint network visualised — red = broken, green = active' },
      { type: 'image', src: '/breakdown/collapse-sim.jpg', caption: 'Mid-sim frame showing RBD chunk distribution' },
      { type: 'image', src: '/breakdown/collapse-comp.jpg', caption: 'Before/after composite over live-action plate' },
    ],
  },
  {
    id: 'iron-warden',
    title: 'Iron Warden',
    category: 'Game Art',
    shortDescription: 'Game-ready armoured knight character — 12k tris, PBR textures, full Unreal Engine 5 integration.',
    fullDescription:
      'A fully game-ready character asset built to AAA pipeline standards. Base mesh sculpted in ZBrush, retopologised to 12,400 triangles, UV unwrapped and textured in Substance Painter with 4K PBR maps. Rigged and tested in Unreal Engine 5 with Lumen lighting.',
    software: ['ZBrush', 'Maya', 'Substance Painter', 'Unreal Engine 5'],
    vimeoId: '76979871',
    thumbnailUrl: '', // TODO: add thumbnail image to public/thumbnails/
    year: 2023,
    breakdown: [
      { type: 'image', src: '/breakdown/warden-sculpt.jpg', caption: 'High-poly ZBrush sculpt — 4.2M polygons' },
      { type: 'image', src: '/breakdown/warden-topo.jpg', caption: 'Game-res retopology — 12,400 triangles' },
      { type: 'image', src: '/breakdown/warden-wireframe.jpg', caption: 'Wireframe overlay — clean edge flow for deformation' },
      { type: 'image', src: '/breakdown/warden-ue5.jpg', caption: 'Real-time in Unreal Engine 5 with Lumen GI' },
    ],
  },
  {
    id: 'ocean-fury',
    title: 'Ocean Fury',
    category: 'VFX',
    shortDescription: 'Flip fluid ocean simulation with white-water, foam, and spray — Houdini FLIP solver.',
    fullDescription:
      'A large-scale ocean simulation created for a VFX reel entry. Uses Houdini\'s FLIP solver for the primary water body, with separate whitewater and spray simulations layered on top. Final lighting and shading done in Karma XPU.',
    software: ['Houdini', 'Karma XPU', 'Nuke'],
    vimeoId: '76979871',
    thumbnailUrl: '', // TODO: add thumbnail image to public/thumbnails/
    year: 2024,
    breakdown: [
      { type: 'image', src: '/breakdown/ocean-sim.jpg', caption: 'FLIP simulation — 40M particles at peak' },
      { type: 'image', src: '/breakdown/ocean-whitewater.jpg', caption: 'Whitewater layer isolated — foam + spray passes' },
    ],
  },
  {
    id: 'meridian-tower',
    title: 'Meridian Tower',
    category: 'Arch Viz',
    shortDescription: 'Photorealistic architectural flythrough of a mixed-use tower concept, rendered in Unreal Engine 5.',
    fullDescription:
      'A 90-second architectural visualisation flythrough commissioned as a university brief. The building design was provided as a CAD model; all look development, lighting, vegetation, and animation were created from scratch. Rendered entirely in real time using Unreal Engine 5 with Lumen and Nanite.',
    software: ['Unreal Engine 5', 'Blender', 'Substance Painter', 'After Effects'],
    vimeoId: '76979871',
    thumbnailUrl: '', // TODO: add thumbnail image to public/thumbnails/
    year: 2023,
    breakdown: [
      { type: 'image', src: '/breakdown/meridian-exterior.jpg', caption: 'Exterior establishing shot — golden hour lighting' },
      { type: 'image', src: '/breakdown/meridian-interior.jpg', caption: 'Interior lobby — Lumen GI with emissive light strips' },
      { type: 'image', src: '/breakdown/meridian-wireframe.jpg', caption: 'Nanite mesh visualiser — full scene geometry' },
    ],
  },
  {
    id: 'run-cycle-study',
    title: 'Locomotion Study',
    category: 'Character',
    shortDescription: 'Stylised quadruped locomotion — walk, trot, gallop, and jump cycles for a wolf character.',
    fullDescription:
      'A comprehensive locomotion study for a stylised wolf character, covering four gaits from scratch. Each cycle was blocked in stepped mode first, then splined and refined using the graph editor. Reference from real wolf footage and \"The Animator\'s Survival Kit\" principles.',
    software: ['Maya', 'Arnold'],
    vimeoId: '76979871',
    thumbnailUrl: '', // TODO: add thumbnail image to public/thumbnails/
    year: 2023,
    breakdown: [
      { type: 'image', src: '/breakdown/loco-stepped.jpg', caption: 'Stepped blocking pass — establishing key poses' },
      { type: 'image', src: '/breakdown/loco-curves.jpg', caption: 'Graph editor — cleaned spline curves for the trot cycle' },
      { type: 'vimeo', src: '76979871', caption: 'All four cycles side by side' },
    ],
  },
]
