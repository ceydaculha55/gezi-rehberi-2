import type { Schema, Struct } from '@strapi/strapi';

export interface GeziParcalariEkBilgiler extends Struct.ComponentSchema {
  collectionName: 'components_gezi_parcalari_ek_bilgilers';
  info: {
    displayName: 'Ek_Bilgiler';
  };
  attributes: {};
}

export interface GeziParcalariPratikBilgi extends Struct.ComponentSchema {
  collectionName: 'components_gezi_parcalari_pratik_bilgis';
  info: {
    displayName: 'Pratik_Bilgi';
    icon: 'lightbulb';
  };
  attributes: {
    Aciklama: Schema.Attribute.String;
    Tur: Schema.Attribute.String;
  };
}

export interface GeziParcalariZiyaretciIpucu extends Struct.ComponentSchema {
  collectionName: 'components_gezi_parcalari_ziyaretci_ipucus';
  info: {
    displayName: 'Ziyaretci_Ipucu';
    icon: 'quote';
  };
  attributes: {
    Baslik: Schema.Attribute.String;
    Ipucu_Metni: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gezi-parcalari.ek-bilgiler': GeziParcalariEkBilgiler;
      'gezi-parcalari.pratik-bilgi': GeziParcalariPratikBilgi;
      'gezi-parcalari.ziyaretci-ipucu': GeziParcalariZiyaretciIpucu;
    }
  }
}
