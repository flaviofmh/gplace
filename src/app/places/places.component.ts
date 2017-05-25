import { Component, OnInit } from '@angular/core';
import { Http, Response, JsonpModule, Jsonp }    from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class Place {
  id: number;
  name: string;
  nota: number;
  imageUrl: string;
}

const PLACES: Place[] = [
  { id: 11, name: 'Marbeli', nota: 2, imageUrl: 'https://static.tumblr.com/2bcb53daae32f8ec20ba280bc5a333ae/yra2rka/ETTnejupl/tumblr_static_tumblr_static_ac8gliq6hds0ww4gwo4o8w4ww_640.jpg' },
  { id: 12, name: 'Pizza Mia', nota: 3, imageUrl: 'https://static.tumblr.com/0a2d3ce84ce1a01fda383c586c49969c/f7xc5ih/nYnng6nug/tumblr_static_tumblr_static__640.jpg' },
  { id: 13, name: 'SubWay', nota: 4, imageUrl: 'http://68.media.tumblr.com/tumblr_lmri1rwBTR1qb6wnb.jpg' },
  { id: 14, name: 'Blend', nota: 4, imageUrl: 'https://static.tumblr.com/1250ace998ed37a5ef6261d243319a0f/qavks0t/09qnmcf33/tumblr_static_tumblr_static_adikbaezod4cossg8o4k08wow_640.jpg' },
  { id: 15, name: 'Empadinhas Barnabe', nota: 5, imageUrl: 'http://data.whicdn.com/images/18799132/tumblr_lvp35r7EJl1r4oulao1_500_large.jpg' },
  { id: 16, name: 'Mundial Lanches', nota: 3, imageUrl: 'http://petapixel.com/assets/uploads/2012/09/tumblr_m7dpbnpuUv1rbc7e8o1_1280.jpg' },
  { id: 17, name: 'Mangai', nota: 4, imageUrl: 'https://secure.static.tumblr.com/2fd11f7e4378393617922cf53c5e0fec/sbrb9jn/2S6o9ys32/tumblr_static_tumblr_static__640.jpg' },
  { id: 18, name: 'Terere', nota: 3, imageUrl: 'https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2011/03/11/896798.jpg' },
  { id: 19, name: 'DiNapolis', nota: 2, imageUrl: 'https://static.tumblr.com/1e19d796c6aadc46c8a1376cbdb6caeb/jdmpn35/naHn08lm2/tumblr_static_ha_long_bay_vietnam_-_next_destination_halong_bay_vietnam_a_wonderful_place_tourists__.jpg' },
  { id: 20, name: 'Habibis', nota: 1, imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/a9/1a/30/a91a30559949276a2de594a01ba5b8d7.jpg' }
];

export class TypePlace {
  typeValue: string;
  label: string;
}

const TYPEPLACES: TypePlace[] = [
  { typeValue: 'accounting', label: 'contabilidade' },
  { typeValue: 'airport', label: 'aeroporto'},
  { typeValue: 'amusement_park', label: 'Parque de diversões' },
  { typeValue: 'aquarium', label: 'aquário'},
  { typeValue: 'art_gallery', label : 'galeria de Arte'},
  { typeValue: 'atm', label: 'ATM'},
  { typeValue: 'bakery', label: 'padaria'},
  { typeValue: 'bank', label: 'banco'},
  { typeValue: 'bar', label: 'Bar'},
  { typeValue: 'beauty_salon', label: 'salão de beleza'},
  { typeValue: 'bicycle_store', label: 'Loja de bicicletas'},
  { typeValue: 'book_store', label: 'livraria'},
  { typeValue: 'bowling_alley', label: 'Pista de boliche'},
  { typeValue: 'bus_station', label: 'estação de onibus'},
  { typeValue: 'cafe', label: 'lanchonete'},
  { typeValue: 'campground', label: 'área de camping'},
  { typeValue: 'car_dealer', label: 'venda de carros'},
  { typeValue: 'car_rental', label: 'Aluguel de carro'},
  { typeValue: 'car_repair', label: 'reparo de carro'},
  { typeValue: 'car_wash', label: 'lava-jato'},
  { typeValue: 'casino', label: 'casino'},
  { typeValue: 'cemetery', label: 'cemitério'},
  { typeValue: 'church', label: 'Igreja'},
  { typeValue: 'city_hall', label: 'Prefeitura'},
  { typeValue: 'clothing_store', label: 'loja de roupas'},
  { typeValue: 'convenience_store', label: 'loja de conveniência'},
  { typeValue: 'courthouse', label: 'Tribunal'},
  { typeValue: 'dentist', label: 'dentista'},
  { typeValue: 'department_store', label: 'loja de departamento'},
  { typeValue: 'doctor', label: 'médico'},
  { typeValue: 'electrician', label: 'eletricista'},
  { typeValue: 'electronics_store', label: 'loja de eletrônicos'},
  { typeValue: 'embassy', label: 'embaixada'},
  { typeValue: 'fire_station', label: 'Corpo de Bombeiros'},
  { typeValue: 'florist', label: 'florista'},
  { typeValue: 'funeral_home', label: 'Casa funerária'},
  { typeValue: 'furniture_store', label: 'loja de móveis'},
  { typeValue: 'gas_station', label: 'posto de gasolina'},
  { typeValue: 'grocery_or_supermarket', label: 'Supermercado'},
  { typeValue: 'gym', label: 'Academia'},
  { typeValue: 'hair_care', label: 'cuidado capilar'},
  { typeValue: 'hardware_store', label: 'Loja de ferragens'},
  { typeValue: 'health', label: 'saúde'},
  { typeValue: 'hindu_temple', label: 'Templo hindu'},
  { typeValue: 'home_goods_store', label: 'Loja de artigos para o lar'},
  { typeValue: 'hospital', label: 'hospital'},
  { typeValue: 'insurance_agency', label: 'agência de seguros'},
  { typeValue: 'jewelry_store', label: 'Loja de jóias'},
  { typeValue: 'laundry', label: 'lavanderia'},
  { typeValue: 'lawyer', label: 'advogado'},
  { typeValue: 'library', label: 'biblioteca'},
  { typeValue: 'liquor_store', label: 'Loja de bebidas alcoólicas'},
  { typeValue: 'local_government_office', label: 'Escritório do governo local'},
  { typeValue: 'locksmith', label: 'chaveiro'},
  { typeValue: 'lodging', label: 'alojamento'},
  { typeValue: 'movie_theater', label: 'cinema'},
  { typeValue: 'moving_company', label: 'Empresa de mudanças'},
  { typeValue: 'museum', label: 'museum'},
  { typeValue: 'night_club', label: 'Boate'},
  { typeValue: 'park', label: 'parque'},
  { typeValue: 'parking', label: 'estacionamento'},
  { typeValue: 'pet_store', label: 'loja de animais'},
  { typeValue: 'pharmacy', label: 'farmacia'},
  { typeValue: 'physiotherapist', label: 'fisioterapeuta'},
  { typeValue: 'plumber', label: 'encanador'},
  { typeValue: 'police', label: 'polícia'},
  { typeValue: 'post_office', label: 'Agência dos Correios'},
  { typeValue: 'real_estate_agency', label: 'Agência imobiliária'},
  { typeValue: 'restaurant', label: 'restaurante'},
  { typeValue: 'school', label: 'escola'},
  { typeValue: 'shoe_store', label: 'loja de sapatos'},
  { typeValue: 'shopping_mall', label: 'Centro de compras'},
  { typeValue: 'spa', label: 'spa'},
  { typeValue: 'stadium', label: 'estádio'},
  { typeValue: 'storage', label: 'armazenamento'},
  { typeValue: 'store', label: 'loja'},
  { typeValue: 'subway_station', label: 'estação de metrô'},
  { typeValue: 'taxi_stand', label: 'ponto de taxi'},
  { typeValue: 'train_station', label: 'estação de trem'},
  { typeValue: 'travel_agency', label: 'agência de viagens'},
  { typeValue: 'university', label: 'universidade'},
  { typeValue: 'veterinary_care', label: 'veterinário'},
  { typeValue: 'zoo', label: 'jardim zoológico'}
];

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {
  places = PLACES;
  typeplaces = TYPEPLACES;
  placesGoogle = [];
  typePlace: string;
  placeService;
  urlSearch: string;

  constructor (private http: Http) {}

  ngOnInit() {
  }

  searchPlace() {
    this.urlSearch = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-7.105171,-34.839&radius=1000&type='+ this.typePlace +'&key=AIzaSyBcW19oPx0oSbVYrBpp1hLy7lgZK1nQ61E';
    console.log(this.http.get(this.urlSearch).map(res => res.json()).subscribe(place => this.placeService = place));
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
