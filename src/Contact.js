
import React from 'react';
import { MDBCol, MDBRow} from "mdbreact";
import { YMaps, Map, Placemark } from 'react-yandex-maps';


const mapState = {
  center: [49.94878057229531,82.62334423411554],
  zoom: 16,
 
};


export const Karta = () => (


<MDBCol lg="12">
<YMaps>
<Map defaultState={mapState} height={'200px'} width={'100%'}  >
  <Placemark geometry={[49.948761534117736,82.62499647486868]} />
</Map>
</YMaps>

</MDBCol>
);


export const Contact = () => (





  <div>
  <div class="row">
 
   
<MDBCol lg="12">
 <h3>Контакты</h3>
<hr />
<p>070010, Казахстан, Усть-Каменогорск,<br/>
  М.Горького 46 офис 108
</p>
<p> Тел.: +7 (7232) 77-74-71</p>
<p> Тел.: +7 (771) 133 28 57</p>

</MDBCol>
    
   
   
    
  </div> <Karta />


</div>
)
