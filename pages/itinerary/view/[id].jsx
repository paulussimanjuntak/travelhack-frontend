import { useRouter } from 'next/router'
import { Row, Col, Tabs, Button, Space, Divider, Tag, Image as AntImage } from 'antd'
import { useState, useEffect, useRef, useCallback, memo } from 'react'
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'

import { libraries, GMapsOptions, mapContainerStyle, markerOptions, infoOptions } from 'lib/GMapsOptions'

const d = [{"time":"29 Juni 2021","places":[{"place_id":"ChIJx97hVM9E0i0RUVpPBj5miBk","name":"Garuda Wisnu Kencana Cultural Park","position":{"lat":-8.8104228,"lng":115.1675986},"rating":4.5,"user_rating":45059,"address":"Ungasan, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDJns9swnZfxgd3hMDQVKnBVK9o_l3MRfy2XbeEaJcrSkoX4PkFWdj1zP693VXtGvm1bmACBKsGdldO2tJWGsrzRKbEh74Yd70vKMdQaLVrM732C-bHluArOfG2ktQ-w3m84EDYgcV_qlukAnSax_oKmKQVFWXqqQm-lhjxFMYn9MuE&3u4000&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=124314"},{"place_id":"ChIJqao6BRZF0i0R9qZ7RWbjOAs","name":"New Kuta Green Park","position":{"lat":-8.797723,"lng":115.12439},"rating":3.6,"user_rating":299,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECslsh_WiFgEq2C6CSzIwh-4X90osJXVI-4FTZHDws3HhK_2AaB45wO9qdAoVrgFGcQfPvuxC2vuCYMgQeo_9HlirNFXbc9ZxZj8fKZ7YAuq0kUwDI_bHfRiBtzzDQZBxm6wkUQxIzZcYg5usHqm18PXwgo3C8vh1EcCUO9oOYaTCQo&3u5984&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=127327"},{"place_id":"ChIJl3cclhFF0i0RbSh25ZoqDQA","name":"Tebing Pantai Balangan","position":{"lat":-8.789679399999999,"lng":115.1251549},"rating":4.7,"user_rating":149,"address":"Jimbaran, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBEJTxx9j0TTWiMn4Blt49p_5ZDBRA_K92f7IB2c6Do70pDDztCRmg3bcBsG9kZH1c_0VXn1CGRLG3xDhNbGM3Bbwec-BrR_ieiTJ9BKb49RpSu1v2_EwbbZotscFzAxeCDVFgc1afyNvJKNVuX79-ywGCktTPaUQlf1TlFKGD0lu9J&3u3264&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=26298"},{"place_id":"ChIJ_TLw0oxF0i0RKqoXJNwDGG0","name":"Balangan Beach","position":{"lat":-8.791096799999998,"lng":115.1243377},"rating":4.5,"user_rating":1335,"address":"Jimbaran, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEABfbmMN5vWTQnLBmF7aqLkv_WfM0u8ASGhyd21JG9kmHlOZTMEnJ9mUJ0-yBbIrG6QVUqxM3T2AtdfxWUdvIr04qlKhR3GiUb6vMGQu7OGoz9sTnd2rCBM1WwhdZSJQQM3E7QHAI06zJLNBA3tmWONvcUF1-nNOm8tMTTm3hB2ye_b&3u800&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=111205"},{"place_id":"ChIJ5SdV5RpF0i0RWSeph8s7d5M","name":"Dreamland Beach","position":{"lat":-8.7993192,"lng":115.1177659},"rating":4.4,"user_rating":3074,"address":"Jimbaran, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBl-3e5hY9AyVRIoEDeAknNHjn8lJR-AOKVmpxRUaL15ph4qSvmKMMmQ9RhRDkGQOdV5zqivLaianQge3YgpgavSTUBftMMDLlYUHFL-3JjBRoFAtQ-QZQzKyp5QxBRovNTc2EPXBEr_3p8Dc-0dF6kjqxzRgVunMZx8UbEhWrkaJo7&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=1932"},{"place_id":"ChIJ3fLUUs9E0i0RP8BFf-NGZiU","name":"GWK Main Gate","position":{"lat":-8.8063945,"lng":115.1592625},"rating":4.5,"user_rating":10892,"address":"Ungasan, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECjPL9TN0wKfEvgBlmSVCgeG_4YBwevlptp6sNsmjXQmsfwkfGEM3Uki67GpdftauZ7xkq5onfCmfNf0PKMLN5EpyuaBO14SdT0WSgKPpfOZrkuihy_-55sdDIifx9xlaZtqVgXiwtL-0IwbxjUj7l-QxrZafo82HRb3MD4cDKCHYFN&3u4160&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=98043","vicinity":"Jl. Kw. Garuda Wisnu Kencana, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia","telp":"(0361) 700808","website":"http://www.gwkbali.com/","opening_hours":false},{"place_id":"ChIJCe8G_AtQ0i0R0JR4F-xW47U","name":"Karang Boma Cliff","position":{"lat":-8.8345366,"lng":115.0877251},"rating":4.7,"user_rating":452,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDubgaRwDeVlBzYCNIZBIhMS6I_4H16HHcNmnh2ZVjaH7PGecbG9LPAz0buMVVjuRap18qQJ_7Rw59wjFJGvUNBWKbIlTe-ueUqSD3J6T7NOPe7VkWAT6goq0tSBZNa_s0tkVS_5M2tI73hwoOKjIvhwvsUg28l5FKw2NkboYmGMwWE&3u3120&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=83765","vicinity":"Unnamed Road, Pecatu, South Kuta, Badung Regency, Bali, Indonesia","telp":"(0361) 9009270","website":"http://www.badungtourism.com/","opening_hours":["Sunday: Open 24 hours","Monday: Open 24 hours","Tuesday: Open 24 hours","Wednesday: Open 24 hours","Thursday: Open 24 hours","Friday: Open 24 hours","Saturday: Open 24 hours"]},{"place_id":"ChIJmZ9tjixF0i0RYEhJylVprxM","name":"MASJID AGUNG PALAPA","position":{"lat":-8.8191706,"lng":115.140791},"rating":4.8,"user_rating":1018,"address":"Ungasan, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDqX2-Ulp-wrsU_8bkWNe4SdX81DuyLbq4ysx4-Tr3Gpg3a6FkwOij0q1yNIcw2kE_F-FI9fXP5U-q420UNMDu3gm96eViRLsRsGrU3Jd6-HRlCsP44Fi99-Jr3vEQfQRJ-WCPqtzvjA1bnhg3wmJsHPo-gz5MDcUKGD3-wi12-LoHg&3u4160&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=93764","vicinity":"Dreamland Bali Jalan Pecatu Indah Resort Pecatu Bali, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia","telp":"0812-2111-0146","website":false,"opening_hours":["Sunday: 3:00 AM – 11:00 PM","Monday: 3:00 AM – 11:00 PM","Tuesday: 3:00 AM – 11:00 PM","Wednesday: 3:00 AM – 11:00 PM","Thursday: 3:00 AM – 11:00 PM","Friday: 3:00 AM – 11:00 PM","Saturday: 3:00 AM – 11:00 PM"]},{"place_id":"ChIJE4-AAwVQ0i0RJI17Kb5qMjQ","name":"Uluwatu Kecak & Fire Dance","position":{"lat":-8.8305729,"lng":115.0854093},"rating":4.5,"user_rating":1385,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAmBWdo6EJ0_uL6GEJ3shNcOVqvz1nogBh9JhNhmLoyMDlSQbw0r1Az-ntTc__1Feg8An2Yr0WS3REi3FyPE3RI8DMscSrK1bUGqVZ6cG7xw1ddFdQSjFNOCIdNsq9Ts8c2bKK9TuHakVMbzoeHnxY_Jrbiof2Bto3uW8onMP_SqTx0&3u2256&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=41849"},{"place_id":"ChIJ3RzH_Zxc0i0R6guWUIlhRP0","name":"TIMBIS FLYING SITE BALI","position":{"lat":-8.8419917,"lng":115.1920044},"rating":4.3,"user_rating":306,"address":"Kutuh, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECeQoDT2is_v_1UQuiUNhMAbaCBP6OA1soGOlpAhUTjtyAo4JRo6iEkdiC8w26MAx_z_PW2OV1g7oJOfCCOg13AIFB5pTH2SjjeZ3QW5PUNFFiewL8QzHQuT3fFk3CTmzeJ_MUOQ8qjht24nhUo4i36hVEa3uRdQ-BniaIY5O2fi2b1&3u1440&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=48349"},{"place_id":"ChIJkYHLIPxP0i0RlQTbpxuNuQw","name":"Uluwatu Temple","position":{"lat":-8.829143199999999,"lng":115.0849069},"rating":4.6,"user_rating":26287,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECfqf-FbnRtiln9Z1wDQXAKAD_9VWqIlxDD3nxbub8SWGAt82m7JNL7rhMX1cTc1wMoTusAaXzZ3Monas9UbWu3PF5wQ--UGbwfWmGv0bvoEQPLi9QPtkn8aEcmz0JarFRIQ0OH6MQcpbhnJaIds7BDV_nz4eHytmXDcwA4aoaOwwYg&3u5184&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=115245"},{"place_id":"ChIJnfS_xZJb0i0REzmFKPFL_OY","name":"Karma Beach","position":{"lat":-8.8476112,"lng":115.1528609},"rating":4.7,"user_rating":168,"address":"Ungasan, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDhhMQnH4v3XcPBCh1kJGEtvAmNmLjN9h4AQRHhV_J4wxynP0cSoBFY5fkoUzFpoQcZbKx17HmMGxgUsu90Cm1YjXm9RqTkC6lwAbN_xF4SsJ_2IP1vUttYyl_teb0erV969xvo0Bnj7pbZEVvFQuBaSdLFE_z6w8CrZYUz9aOmQXOa&3u3000&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=94700"},{"place_id":"ChIJf6d0f5Nb0i0Rq_tEZeZB_Nc","name":"Pantai Melasti Ungasan","position":{"lat":-8.848648599999997,"lng":115.1593918},"rating":4.8,"user_rating":2546,"address":"Ungasan, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEA61Wpe4-luOq0di6QhyJdzrMROPK-kTyiZxVMJDlO1g3TW_dMCkOfqQTZhe8i21psZvuZEbs2CoshCkrmSfVYKLTxL_G4Dt_WuYCnc40AzVqORTS8MAJSi2MJzDbQwqj6HQJYf4mSfCRhPFP7U06sQaUCia01BtzfJuysmd1AHWEn1&3u4624&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=33530"},{"place_id":"ChIJoXHmsA5Q0i0RX12uAj70YFs","name":"Tebing Karang Boma","position":{"lat":-8.8355116,"lng":115.08752},"rating":4.6,"user_rating":210,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBEuv-5jkI3M5czDBdV-yJ3cJVcdDDFR457MLLX5qJO5kYLF3lXXoQWDrgSnULT0TJefZTmQlw86O3O-bnK5IQHoX4-b7y6_K4P5snDyZdQLSQEtAzTRUR1balBBG1ldKuViIIEadmn3RNsRLTXYO7rVtyEgIU1visbUgY_eWK29BQK&3u3024&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=89979"},{"place_id":"ChIJDVCc27la0i0RLPyenexWGvA","name":"ATV Bukit Sari","position":{"lat":-8.830001999999999,"lng":115.1138056},"rating":4.5,"user_rating":68,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECHd19ddG2UnfoGgrGJpVV8g24lVEuqwMN1hemopqoOvx-x_0604GkEiIONivNSXJIG1YdFsbEu6CFCiFcBt8GQitN8dG-7rePxlmRm8S-xx-_-0vfh6YDyB0suVcU7xGoXLk9c8lQ5b1k--csKC2VxIz5-q2O8owxOYu6w8cVaYXk9&3u5184&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=74217","vicinity":"Jl. Pratu Rukeh No.18, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia","telp":"0813-9498-8880","website":"https://atv-bukit-sari.business.site/?utm_source=gmb&utm_medium=referral","opening_hours":["Sunday: 9:00 AM – 5:00 PM","Monday: 9:00 AM – 5:00 PM","Tuesday: 9:00 AM – 5:00 PM","Wednesday: 9:00 AM – 5:00 PM","Thursday: 9:00 AM – 5:00 PM","Friday: 9:00 AM – 5:00 PM","Saturday: 9:00 AM – 5:00 PM"]},{"place_id":"ChIJR2arCMVa0i0Rtd9ghyKln7Q","name":"Bukit Sari Pecatu Agrotourism","position":{"lat":-8.8303681,"lng":115.1270239},"rating":4.3,"user_rating":411,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDGoMOG3u1LyCr1ldwe5iVHiwZsGYKr84EV89EGti2muDcywr9N9uom_-DORNjo1mXW0fUVyGKfGzJUfHfRjtIGTZl1jek8BMe3PxXR1b4iTsFKkZ-1tJt_9LibWa5K3TaIlrz9S1ASeQffqmQsoPahLWcLr-YdpJPFCBI94A_TwFHY&3u1836&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=67674","vicinity":"Jl. Raya Uluwatu Pecatu No.21, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia","telp":"0822-3662-1238","website":"https://www.malaysiatravelpedia.com/bukit-sari-pecatu-agrotourism-bali-indonesia.html","opening_hours":["Sunday: Closed","Monday: 9:00 AM – 8:00 PM","Tuesday: 9:00 AM – 8:00 PM","Wednesday: 9:00 AM – 8:00 PM","Thursday: 9:00 AM – 8:00 PM","Friday: 9:00 AM – 8:00 PM","Saturday: 9:00 AM – 8:00 PM"]},{"place_id":"ChIJM5HBaF5b0i0RvBhiT1EoikU","name":"Tara Green Hydroponic Farm & Cafe","position":{"lat":-8.8329092,"lng":115.1344364},"rating":4.8,"user_rating":58,"address":"Pecatu, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBEwjLhNL830B6wpyLYTJFid_-Dh9IfZsVs9oxHhWxcPkm0SRebyursL3UY8mMeVZKrHx_KwuTwSq-k5M6M8Vm8gGYh91C0cDyf9Zzx-u5AlTXRCOEnD4-VCBI64tG6XI7Cbb8AC3svca7tXLPLl7TcA8nlIaqEIj45689a33WJXf_d&3u4000&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=122074","vicinity":"Jl. Belimbing Sari III No.3, Pecatu, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia","telp":"0877-1064-1047","website":false,"opening_hours":false}],"notes":""},{"time":"30 Juni 2021","places":[{"place_id":"ChIJAWFd0YJE0i0RAWxpYkEZ3fo","name":"Mangrove Forest Management Center Region I","position":{"lat":-8.724973,"lng":115.1943527},"rating":4.1,"user_rating":408,"address":"Pemogan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECpLd5yo4HWXEYuDsLXIVY5xRo-Paifwyn2v1OJxxI_YdHgwkr58VMsfy7-4Qxq9fRnIehchpSal2ZC7WfRXUvIVy4Zy09wZq9DFjyh4XjHYPfc5E6k5RLuAfwoMFBFVSeNUkJm3yZyjwEgjT_FM0mpdwDe-Pecfo3jLSD03fIFyBoH&3u2304&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=90854","vicinity":"Jl. Bypass Ngurah Rai No.KM. 21, Pemogan, Kuta, Kota Denpasar, Bali 80361, Indonesia","telp":"(0361) 726969","website":"http://bphm-i.sim-rlps.dephut.go.id/","opening_hours":["Sunday: 8:00 AM – 5:00 PM","Monday: 8:00 AM – 5:00 PM","Tuesday: 8:00 AM – 5:00 PM","Wednesday: 8:00 AM – 5:00 PM","Thursday: 8:00 AM – 5:00 PM","Friday: 8:00 AM – 5:00 PM","Saturday: 8:00 AM – 5:00 PM"]},{"place_id":"ChIJR5VnrH9B0i0R4LN-rS55uSs","name":"Pura Dalem Susunan Wadon","position":{"lat":-8.727566699999997,"lng":115.2336025},"rating":4.8,"user_rating":133,"address":"Serangan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECTSKJBOBj93n45cgnCF3rmADJcqPjnE0q6G3jY_U6_djn7DIEoHLJQzTQc1LpEIQKikl_CAo2hhUIqnavvCof7lcDlSq2BUbtAp5UIEM_tGIhrUtlTKwn7QTFFmHwzR3caZ3G6EszRWVvB5uBVRABehypfcjXryEo1RhZPZf1W-BQ4&3u4656&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=48758"},{"place_id":"ChIJSarD2LhD0i0RypwH_Wp6r-w","name":"Masjid Jami'Mujahidin","position":{"lat":-8.7531968,"lng":115.2183803},"rating":4.7,"user_rating":382,"address":"Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAzzKOCjIhzHuEfFMdINjwB2lwEZSKF31usHOqKSNrGrd-QcayGYCa3YctNuKbIoNwJazU6iwAszlEtZyeQ7GJBI1rurtiRoJNxmEOs5tCdSlU70RSXALjxQO2FxtxI6x0tqPOAGY24T3zd-2u_jUHlm3dHO5ZTMADDfoGZ2mgAzAUL&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=2304","vicinity":"Jalan Segara Lor, Tanjung Benoa, Kuta, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali 80361, Indonesia","telp":false,"website":false,"opening_hours":false},{"place_id":"ChIJMRxpyP1D0i0RuJQRqSkUHEI","name":"Mangrove Denpasar, Last Point","position":{"lat":-8.726118499999998,"lng":115.1933509},"rating":4.3,"user_rating":432,"address":"Pemogan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDnBmjSvYdMbN1PavSR5w1iUwDpi0rKT0PA99cgRZl3Ph5k7P9lgnoMuPoUCC3oeMWYr2hWezpIqhQupPxeZOj8xVRexS0yPmu26Iokq2hbxjhry9jUsPQqZ-OApDn7IopgAIoim4LODuoa6RH297bioAqBdnGIxOcLivfDnj9OiVtK&3u4000&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=121891","vicinity":"Pemogan, Denpasar Selatan, Denpasar City, Bali 80361, Indonesia","telp":false,"website":false,"opening_hours":["Sunday: 7:00 AM – 5:00 PM","Monday: 7:00 AM – 5:00 PM","Tuesday: 7:00 AM – 5:00 PM","Wednesday: 7:00 AM – 5:00 PM","Thursday: 7:00 AM – 5:00 PM","Friday: 7:00 AM – 5:00 PM","Saturday: 7:00 AM – 5:00 PM"]},{"place_id":"ChIJE3N6eqhG0i0RckSPuw726-A","name":"The Keranjang Bali","position":{"lat":-8.7317559,"lng":115.1777792},"rating":4.4,"user_rating":6064,"address":"Kuta, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEC_hJfR6eK_9btucy2qGqq8HzmHfHk_Q0wKEYGCzMuL9Gf9kbokmR5ppLIj1JRnLL-0lwvuJ0NmaeW73vSTha8_azpi2eFPLuJ_FIttnneyqxWpxajXjbgJ9L2d2toA2K108sEf8eikSVUmW_0j0wTFGNPkR1nFbUEsPZluebLIKHTQ&3u4000&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=51053"},{"place_id":"ChIJNa4uW0xB0i0RevpSX7uEVjQ","name":"Barong Tanah Kilap - Sari Wisata Budaya BALI","position":{"lat":-8.718832599999999,"lng":115.1924588},"rating":4.4,"user_rating":1417,"address":"Pemogan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAYluJvnTfJlKjpTjF5nBR46aadi3N8n4CxmuL3A4np0WfKyx23jYpQLUoT_iKEmimi0SYdRPPF3POYv51Dha3UxFqmW-r7quu8WA5LsPpmu22SnCKOOaIAGRlOY1tF4mVEoymNO4oG5QvJ9fLWv8rzy4HqF3BO-KW36quohS3M456m&3u828&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=18043","vicinity":"Jl. Griya Anyar No.25B, Pemogan, Denpasar Selatan, Kota Denpasar, Bali 80221, Indonesia","telp":"0812-4673-2107","website":false,"opening_hours":["Sunday: 9:00 – 10:30 AM","Monday: 9:00 – 10:30 AM","Tuesday: 9:00 – 10:30 AM","Wednesday: 9:00 – 10:30 AM","Thursday: 9:00 – 10:30 AM","Friday: 9:00 – 10:30 AM","Saturday: 9:00 – 10:30 AM"]},{"place_id":"ChIJq6HQF2dB0i0RG4g6CYqaKd0","name":"Bali Wake Park","position":{"lat":-8.724939,"lng":115.214917},"rating":4.4,"user_rating":1333,"address":"Pedungan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECHGYzk73UkYKFCyQRPeGHTlJp-4j8kJq-sSrJ566GPn0kOvJpxoPMQMi-kc2X6IfaEoMdqI0DQ88WDRtAPNwdiBZA9zZ8gkgsM8bm-soz01KZgp6NVxJaDHzE_0Z4nkXkzgkXCl_BBE0gRWRQD9pNwKMwDdIc0K7GXJPo50HIH3bJJ&3u2100&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=41715","vicinity":"Jl. Raya Pelabuhan Benoa No.7X, Pedungan, Denpasar Selatan, Kota Denpasar, Bali, Indonesia","telp":"(0361) 8468866","website":"http://www.baliwakepark.com/","opening_hours":["Sunday: 10:00 AM – 6:00 PM","Monday: 10:00 AM – 6:00 PM","Tuesday: 10:00 AM – 6:00 PM","Wednesday: 10:00 AM – 6:00 PM","Thursday: 10:00 AM – 6:00 PM","Friday: 10:00 AM – 6:00 PM","Saturday: 10:00 AM – 6:00 PM"]},{"place_id":"ChIJf9ehV5pB0i0RNwxjWAJ05kU","name":"Bali Exotic Marine Park","position":{"lat":-8.7238932,"lng":115.2165708},"rating":4.7,"user_rating":123,"address":"Pedungan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDGQWCBDrU72uLgZBmOYGC_qt0_OgeB603EcZSc_tlQlh7UMuFz74iGZenkfhGaABe7L31EF2SX8P3dUJ8upMmkHL-GnoXKxe_hIXOHQNrFdGrV3gUd1__RBA3C2oAdT_C2YIK5PCWJPfPOmvRSyq4HUpGm4db5u4Y2PDBYR8Ai4HmL&3u2252&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=120568","vicinity":"Jl. Raya Pelabuhan Benoa No.7x, Pedungan, Denpasar Selatan, Kota Denpasar, Bali 80222, Indonesia","telp":"0853-3883-3678","website":"https://www.baliexoticmarinepark.com/","opening_hours":["Sunday: 11:30 AM – 6:00 PM","Monday: 11:30 AM – 5:30 PM","Tuesday: 11:30 AM – 5:30 PM","Wednesday: 11:30 AM – 5:30 PM","Thursday: 11:30 AM – 5:30 PM","Friday: 11:30 AM – 6:00 PM","Saturday: 11:30 AM – 6:00 PM"]},{"place_id":"ChIJ1T4032dB0i0R-Pca40moFVc","name":"Satya Dharma Temple","position":{"lat":-8.721026499999999,"lng":115.2144481},"rating":4.7,"user_rating":1365,"address":"Pedungan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDOEd7YWYA9-DjKkIvhUDJmEx0Gf_R1Hfg8Rb6MdaYxF0butV6xrdVWazqFkEFEbMSoW_5P3BZvWq1c7MwZWtGMGkAuTj-NgTTSC9C3QnBDo7SDzBRudWEKU83pLqWd1SZgBh337yRk2yNCvFGZw6LTzWBYQpBXpMYogyURgtkDFDd0&3u3970&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=58294"},{"place_id":"ChIJL1XuIURB0i0RNRhRbMMJMLI","name":"Upside Down World Bali","position":{"lat":-8.716711,"lng":115.2052612},"rating":4.3,"user_rating":3375,"address":"Pemogan, Denpasar City, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDqZeOvHakIO8wiiLx6Jn2XoxEcf2a99j4k7v5w2a_zZDslqiifbkFhPTvmtWb2YziIxT_T4DR3WMfCxgQD9yBX_b8vaySH1PR_XkWfvY8HUIXIp6HydayPtxILD7den6gjm_j9BNJ-UCy2iJ2IyIEsm9U0rkq3cGr8K8Ag4UsYM2YQ&3u5472&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=112154","vicinity":"Jl. Bypass Ngurah Rai No.762, Pemogan, Denpasar Selatan, Kota Denpasar, Bali 80221, Indonesia","telp":"(0361) 8473053","website":"https://www.facebook.com/UpsideDownWorldIndonesia/","opening_hours":["Sunday: 9:00 AM – 7:00 PM","Monday: 9:00 AM – 7:00 PM","Tuesday: 9:00 AM – 7:00 PM","Wednesday: 9:00 AM – 7:00 PM","Thursday: 9:00 AM – 7:00 PM","Friday: 9:00 AM – 7:00 PM","Saturday: 9:00 AM – 7:00 PM"]}],"notes":""},{"time":"1 Juli 2021","places":[{"place_id":"ChIJHeVmRqVD0i0RKncrGMVjGrk","name":"Batara Dive & Watersport","position":{"lat":-8.7614944,"lng":115.2232713},"rating":4.3,"user_rating":1389,"address":"Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEC1kYxSNrSBaHjCs3DkPQbmFi4uGpHWE0feoIlwtIasA1piL55EzYN4BoB8zoY9CdvIuHo9MAY0CznRw46-q5GOFxD7zjSc85qzruwphygfX24R7FeYXLjuTx2Fx72eI6kuRouk_2J_X6jl6MC-IPejHY-cePdQykomM-djbrYTdESN&3u3968&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=74913"},{"place_id":"ChIJq0hlXrlD0i0Rfk6tORob1VY","name":"TANJUNG BENOA WATERSPORTS","position":{"lat":-8.755770299999998,"lng":115.2192517},"rating":4.4,"user_rating":337,"address":"Tanjung Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBXvE86YMgnn-m4uass3fzZFVnzYo2n1g1OOxBkgqomyNmBAH0I9x-OaMGKoeaB1n7uLFDgfzKLafi4NzS2KzTG08eREocn05VTsv3ImSnygbE_k8ob7apeTgIi7wj_gNHEFNCJFft7jXrLDBe47rqAsBuHUDx8-JYXSaROETogvcP9&3u1080&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=101583"},{"place_id":"ChIJXz02yLpD0i0RKBpQnCRUgF4","name":"Basuka Watersport","position":{"lat":-8.760345800000001,"lng":115.2229139},"rating":4.2,"user_rating":487,"address":"Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECsKz2hV1SY0gQ_-UCDuV7cDwqms8vXblKkI_f4_raMrkAGilWicDqhSkebxWVV_prteSjSGNv_XFxhic44hhPweDUX4h4GAXr5MUFCJltTxmRkNu16p6g0NlIvv7WR5yvobtm7rP-Pmglg14ekrDMjx9avBQ3xFXWKkStV0LcCTsdb&3u1280&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=12635","vicinity":"Benoa, South Kuta, Badung Regency, Bali, Indonesia","telp":"(0361) 771800","website":false,"opening_hours":["Sunday: 8:00 AM – 4:00 PM","Monday: 8:00 AM – 4:00 PM","Tuesday: 8:00 AM – 4:00 PM","Wednesday: 8:00 AM – 4:00 PM","Thursday: 8:00 AM – 4:00 PM","Friday: 8:00 AM – 4:00 PM","Saturday: 8:00 AM – 4:00 PM"]},{"place_id":"ChIJf1HWH7pD0i0RZWwtcHe4KaI","name":"Bali Indah & Water Sports","position":{"lat":-8.7556783,"lng":115.221282},"rating":4.3,"user_rating":271,"address":"Tanjung Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAwQZuDvdWFH3XnpJnihUE_y9Jx6lrx06b5MBkWYirxQANXE8IVaFabeQK0tcKweASXX0sRWeefW1teGOaT2dbZvwQRg2lLt77qzDEnSYduBF6ViI8gy2AhyRS94DSWgyh9MJR3QLEdVyzYxryx3UH_eLvGheUhxLJCCiKCP-rsJnmA&3u3840&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=34523"},{"place_id":"ChIJrQEl52ZA0i0RgtGPWz2IKtI","name":"Nusa Dua Water Sports","position":{"lat":-8.7564016,"lng":115.2215828},"rating":4.1,"user_rating":116,"address":"Tanjung Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAT2Qq1TIrqKjCht-yySejST_Iwydnj9EeItZIJ-Oa3okloUPEo1C2yorJwjOgofekPEXoGbx-LYt2sh7eNB9DqtcQG95nwu8qN9TxA9H2i6ilJMijgn3iptvMLfhHygdPzoVCTgsVi9QaOZCBDp25XW9saV4nLJvEfrjcgW3C-1u9P&3u1024&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=72846"},{"place_id":"ChIJR41mLqND0i0R3vM_t4a9Uj0","name":"Penangkaran Penyu Bali Tanjung Benoa","position":{"lat":-8.7617034,"lng":115.2161812},"rating":4.1,"user_rating":4188,"address":"Tanjung Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEA54PYK8_xC4vBiLSgd6HN6Tkx16Q03MpAv8A2Odk7gnbd5UzpTD80BzmoIn5gzyD1k1rvpUOeDRVoRE1r1XmrDq_PzXR2wXjkMEGOo-Kf9zpUf5h53hxmNO0xxHuiLIhYvyI3JgQSu2omgLUVg_ivGsRZ04iBSyfbajqiXN_0K9V9-&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=71757"},{"place_id":"ChIJzR9XaA9D0i0R8DiBjq69Sbk","name":"Bali Jet Set Dive and Marine Sports","position":{"lat":-8.763207999999997,"lng":115.216109},"rating":4.1,"user_rating":133,"address":"Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECEx5H5xsbEmxzKJI_cxeaWxNVVvrOaa30RdUsYmjWqz1p9nYEHZlYzo9nWMAS_OsKEkuDyPvLLBjqT3WN52WlShmWTSPDQ_bA2W55woPM3u9_B3syqK2AegjO3U03dEYzHF19sWgvrj7R1Ks4GJE1JBVAsRLifNFjsegT3x23HrQG_&3u2048&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=82838","vicinity":"Jalan Setra Gandamayu, West Beach, Benoa, Tanjung Benoa, Nusa Dua, Badung Regency, Bali 80363, Indonesia","telp":"(0361) 772518","website":"http://www.jetsetmarine.com/","opening_hours":["Sunday: 8:00 AM – 5:00 PM","Monday: 8:00 AM – 5:00 PM","Tuesday: 8:00 AM – 5:00 PM","Wednesday: 8:00 AM – 5:00 PM","Thursday: 8:00 AM – 5:00 PM","Friday: 8:00 AM – 5:00 PM","Saturday: 8:00 AM – 5:00 PM"]},{"place_id":"ChIJZ0hjor1D0i0RNF7L3ig1OSE","name":"海龜島","position":{"lat":-8.758473899999998,"lng":115.2141602},"rating":3.6,"user_rating":68,"address":"Tanjung Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAnXF25LdxGsx7SQxi9hgBdwywtxz5paZtzF_uplt_lsiObKrpE3hqVOqD6ZvVd7_7Y26kcqnfHHxMU0pOcKtdcARu46Z-Yd_6NhJ--aEDF9tANAmKuFkrQeNUebDpsrGSYsECUASQgj5uYqR6NNk3WldeBXIGndMycsskvYJaI1RzM&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=121095","vicinity":"Tanjung Benoa, South Kuta, Badung Regency, Bali, Indonesia","telp":false,"website":false,"opening_hours":false},{"place_id":"ChIJU1YDGqND0i0Ri_D26hVzs_s","name":"Turtle Island Moon Cot Sari","position":{"lat":-8.761589699999998,"lng":115.2163106},"rating":3.7,"user_rating":244,"address":"Benoa, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBLALbWIUKH4atwm2TLBZC3XGLSp19ToYPUDqbQHj9Mnh2F1203YHZaFzQteFgf5zpiDjdqAZ6W6inUh1lQR8pp1accxx3l7H3kQg2cFoqbeZ490KXyOJGWwJjFhZYPPqU05KvtOwi6pUPrwUrYyXJnfFHly3y_bhJxLRYfkypessSP&3u600&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=96329"}],"notes":""},{"time":"2 Juli 2021","places":[{"place_id":"ChIJkbJrRYFH0i0RggJb7CncdHE","name":"Kuta Beach","position":{"lat":-8.7117649,"lng":115.1674661},"rating":4.5,"user_rating":11053,"address":"Legian, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBHYUPpkXd-Hq9CyKRs1YqE1nKiqBABq8yPENXcyYpM7QgJ7AdZY4D2NZR-KXTmCZdGhOk-wdTjPkZIBFAoz1slJgSNcce0qpoY1faqwRrHQ8Kxv9OQ6CyFNIBrFUL3HKZE38e1KrGc5rIYFSgsiLrcrLTkTDj447aYJnX7ir29MOk-&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=93204","vicinity":"Jl. Pantai Kuta No.32, Legian, Badung, Kabupaten Badung, Bali, Indonesia","telp":false,"website":"http://www.badungtourism.com/","opening_hours":["Sunday: Open 24 hours","Monday: Open 24 hours","Tuesday: Open 24 hours","Wednesday: Open 24 hours","Thursday: Open 24 hours","Friday: Open 24 hours","Saturday: Open 24 hours"]},{"place_id":"ChIJc9zVlbxG0i0RQMK8E6Ex14I","name":"IndonesiaTIC","position":{"lat":-8.724061299999999,"lng":115.1768962},"rating":4.4,"user_rating":56,"address":"Kuta, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEAb8SKYb6SnJp97r5CD2rxxwTSy4TGiGQqrS0NtU-GEvHVmZ96nrFIoDQDBvRhTdzeUxAURFWokGatHnm1-_l3Xa8nYjQanm2Dg7kKxfVnegiajXq4Qd2sOTtmedNUWb8c_Wi9LcfOkGLmvqg3IpAdf8MobIgjkUfPioCVU6ZqtiWeR&3u4608&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=113650","vicinity":"Jl. Raya Kuta No.2, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":"(0361) 766181","website":"http://indonesiatic.business.site/","opening_hours":["Sunday: 9:00 AM – 9:00 PM","Monday: 9:00 AM – 9:00 PM","Tuesday: 9:00 AM – 9:00 PM","Wednesday: 9:00 AM – 9:00 PM","Thursday: 9:00 AM – 9:00 PM","Friday: 9:00 AM – 9:00 PM","Saturday: 9:00 AM – 9:00 PM"]},{"place_id":"ChIJh8Ivx7xG0i0Rq4qV4VKa6-k","name":"Bali Sea Turtle Society","position":{"lat":-8.7232678,"lng":115.1698051},"rating":4.4,"user_rating":221,"address":"Kuta, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDsB4Uh6bbKGDYG_QNaVXQTzNKfiMQhEfyZYzmXNmbO98-6rGXxKFWXfgs4_iribWEf1zsJsBcv4btq2BW2bhfBMwnF-GWY41FONLYxiK6yYqwpN9HqYTre18GhjL9lpi3AVEgxWSkkm_AyKqxaMNEU5Sn9iFAD3tHZhZj26y5t35UJ&3u820&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=13065","vicinity":"Jl. Pantai Kuta, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":"0811-3882-683","website":"http://www.baliseaturtle.org/","opening_hours":false},{"place_id":"ChIJhYR21_NF0i0RSWVoEZ9-bc8","name":"Bali Camel Adventure - Kelan Beach","position":{"lat":-8.752632799999997,"lng":115.163802},"rating":4.7,"user_rating":55,"address":"Jimbaran, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEC6qqtgI0Z1TWZhpWcSxpZ_-jDVuZ8LdBwVff3tacjd1bs8NzsJx3q9FD7Z2MJQb5n55kd4Uw3qmoDTDkqv_Sv7PRv7WWgiLNr6R8QPpAIShY0-BRpQ3nWkUi1wsPmbrX3IsPdG9IrGyxM7aeoA2-DNmHF4EHjtQT4eOD70Rqvk-Ed2&3u1404&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=54518","vicinity":"Jl. Taman Sari, Jimbaran, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":"0878-7870-1888","website":false,"opening_hours":["Sunday: 9:00 AM – 4:00 PM","Monday: Closed","Tuesday: Closed","Wednesday: Closed","Thursday: Closed","Friday: Closed","Saturday: 9:00 AM – 4:00 PM"]},{"place_id":"ChIJ02QoZR5H0i0RTYSUB5_O0jw","name":"Dhyana pura church","position":{"lat":-8.6932952,"lng":115.1617446},"rating":4.7,"user_rating":87,"address":"Seminyak, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBKdizt0WAJOMWDkKFBRAqYJkGT2XuV7GyEI_il3mSEh0tUhrU9jdVMn7uJSlDJwX-BFw-tWFZryTOvL8TCTHISSjewvBs9mqNcBiZSzSWj-5mIdHVX5ynbZmI2MOTrF89ZYAHb4sdw4q2jd08RVrR5lF64BBOwLYSF0h2fdJPUi57k&3u3024&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=21070","vicinity":"Jl. Camplung Tanduk No.66, Seminyak, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":false,"website":false,"opening_hours":false},{"place_id":"ChIJ34KP7qNG0i0RpX9A85PWkRI","name":"Waterbom Bali","position":{"lat":-8.728574499999999,"lng":115.1693743},"rating":4.7,"user_rating":9534,"address":"Tuban, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEChEUN289wWlRpNYIGxaaNOs5Uef8-Kkx1K9m06wKaGO34g5enNEcNT5_4iv2emRCQDlnGSPiF7XbkVou3crik37EXLp5wFZo3wz2APzd_KfsFUYe-e7kn9h6cAuIIvj69N1uzzTzIEDnWm8BORaJ1VpOks4oHp8allTA2LdoLe9tkb&3u3024&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=28218","vicinity":"Jl. Kartika Plaza, Tuban, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":"(0361) 755676","website":"http://waterbom-bali.com/","opening_hours":["Sunday: 10:00 AM – 5:00 PM","Monday: Closed","Tuesday: Closed","Wednesday: Closed","Thursday: Closed","Friday: 10:00 AM – 5:00 PM","Saturday: 10:00 AM – 5:00 PM"]},{"place_id":"ChIJW_0gbsNG0i0R_KCK3ZGPA9k","name":"Vihara Dharmayana Kuta","position":{"lat":-8.723860499999999,"lng":115.1778992},"rating":4.7,"user_rating":500,"address":"Legian, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uECemINnMmcuqSP--FuXRL-OZsHSw76HlV1JjJj-AEunAlfuVWiXFZthZD9qx16YyTROn043oxhTZOA0xnhLA9tZcNT-YqPSDElPtk-orMvGWXzmk2KRS17yJjXX6gHpVKoyqrOC2K8cphWmAE7eysd6kETpnx6WI4cqo_iOdAh67xyN&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=17617","vicinity":"Jl. Blambangan, Legian, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":"(0361) 762362","website":false,"opening_hours":["Sunday: 9:00 AM – 8:00 PM","Monday: 9:00 AM – 8:00 PM","Tuesday: 9:00 AM – 8:00 PM","Wednesday: 9:00 AM – 8:00 PM","Thursday: 9:00 AM – 8:00 PM","Friday: 9:00 AM – 8:00 PM","Saturday: 9:00 AM – 8:00 PM"]},{"place_id":"ChIJ1bj2tqBG0i0RRUB-1s7pCiE","name":"Banjar Anyar Kuta","position":{"lat":-8.7330615,"lng":115.1706383},"rating":4.5,"user_rating":58,"address":"Kuta, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBMdUI2rx-lv9NBqKle1G_Iqp-5pwANSVIjRVP-9-KNCk0PMnuiGRi_X7PqFr77XfLDbQ7UY9uYlv58OpleZZrzFr-fv7jA55DzHp9rjcu4TJwHL5E9zoZHKAR_ujcNYPRR7sVZbCG-SO32sIB4ePWycSxpk1E4sw6QcI-2nlUv0zOp&3u2448&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=3315","vicinity":"Jl. Kubu Anyar No.48, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":false,"website":false,"opening_hours":false},{"place_id":"ChIJifkG-xxE0i0R2mkxLL0glMs","name":"Circus Waterpark Kuta","position":{"lat":-8.7372882,"lng":115.1752124},"rating":4,"user_rating":1114,"address":"Tuban, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEBMOPbT5IozoeFDCrkA0ReBpiyKc4N3LlJUMcWLk0xFRDG6Hx7K1ioieFFCye46EFHh1at-MwobfhJhvb5zkNTxUoGf96ESqmGq05ZYtkPjppeFQmRDnbt_cp4h7PXp6_Jjmj5gqo2i0gC11sjf06j_sUPfScG8FlXdyQ2n7eFJV7O2&3u3120&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=14554"},{"place_id":"ChIJqWTktR9E0i0ReRZlFi1owhY","name":"Saint Francis Xavier Catholic Church","position":{"lat":-8.735669,"lng":115.167821},"rating":4.8,"user_rating":2641,"address":"Kuta, Badung Regency, Bali, Indonesia","icon":"https://maps.googleapis.com/maps/api/place/js/PhotoService.GetPhoto?1sAap_uEDlig-YE6uv7fR-R10jVF-L0jS8aa8irp93XI9cTI6DoEmA0Ogpkm0kz9CQ_brdq3Xnwmq_f68-Ck2bzDtRpx5YlUSsaBFdUoi-VHxdv900CqilsJWhPF54mKXmvytrHZMD2emKZxHxFfEZQgqHVDClwBJULrwirKKzHC80VAQmdt2h&3u4032&5m1&2e1&callback=none&key=AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k&token=106546","vicinity":"Jl. Kartika Plaza No.107, Kuta, Kabupaten Badung, Bali 80361, Indonesia","telp":"(0361) 751144","website":"http://www.kutafx.com/","opening_hours":["Sunday: 6:00 AM – 5:00 PM","Monday: 6:00 AM – 5:00 PM","Tuesday: 6:00 AM – 5:00 PM","Wednesday: 6:00 AM – 5:00 PM","Thursday: 6:00 AM – 5:00 PM","Friday: Closed","Saturday: Closed"]}],"notes":""}]


import moment from 'moment'
import Image from 'next/image'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Navbar from 'react-bootstrap/Navbar'

import CardDetailPlaceMap from 'components/Card/DetailPlaceMap'
import DirectionsAsAService from 'components/Itinerary/DirectionsAsAService'
import DirectionsAsRenderer from 'components/Itinerary/DirectionsAsRenderer'

import Style from 'components/Itinerary/style'
import MapStyle from 'components/Itinerary/mapStyle'

const CardDetailPlaceMapMemo = memo(CardDetailPlaceMap)
const DirectionsServiceMemo = memo(DirectionsAsAService)
const DirectionsRendererMemo = memo(DirectionsAsRenderer)

const MarkerIcon = '/static/images/marker-noborder.png'
const RenderDateTab = ({ date }) => (
  <>
    <p className="mb-0 fs-10 font-weight-bolder text-center text-uppercase">
      {moment(date).format('MMM')}
    </p>
    <p className="mb-0 mt-n2 fs-16 font-weight-light text-center">
      {moment(date).format('DD')}
    </p>
  </>
)

const initialInfoWindow = {isHover: false, place: null}
const DetailViewItinerary = () => {
  const router = useRouter()

  const [itineraries, setItineraries] = useState(d)
  const [selectedTime, setSelectedTime] = useState("")
  const [infoWindow, setInfoWindow] = useState(initialInfoWindow)
  const [center, setCenter] = useState({ lat: -8.468297, lng: 115.266128 })
  const [directionsRendererResponse, setDirectionsRendererResponse] = useState(null)
  const [markerClicked, setMarkerClicked] = useState({ isClicked: false, place: null, idx: null })

  const idxItinerary = itineraries.findIndex(item => item.time === selectedTime)

  /* MAPS */
  const mapRef = useRef(null);
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API, libraries });

  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const dragEnd = () => {
    if (!mapRef.current) return false
  }

  const directionsCallback = useCallback((res) => {
    if (res !== null) {
      if (res.status === 'OK') {
        setDirectionsRendererResponse(res)
      } else {
        return
      }
    }
  }, [])

  const onMarkerClick = (place, idx) => {
    setMarkerClicked({ isClicked: true, place: place, idx: idx })
  }

  const onCardPlaceClick = (place, idx) => {
    setCenter(place.position)
    setMarkerClicked({ isClicked: true, place: place, idx: idx })
  }

  const onMouseOver = (place) => {
    if(!infoWindow.isHover) {
      setInfoWindow({ isHover: true, place: place })
    }
  }

  const onMouseOut = () => {
    setInfoWindow(initialInfoWindow)
  }

  let infoWindowContent = null
  if(infoWindow.isHover && infoWindow.place) {
    infoWindowContent = (
      <InfoWindow options={infoOptions} position={infoWindow.place.position}>
        <p className="text-center mb-0 p-2 va-text-bottom d-inline-block text-truncate font-weight-bolder text-white">
          {infoWindow.place.name}
        </p>
      </InfoWindow>
    )
  }

  const onTabChange = val => {
    setSelectedTime(val)
    setInfoWindow(initialInfoWindow)
    setMarkerClicked({ isClicked: false, place: null })
  }

  const goHome = () => {
    router.push('/')
  }

  useEffect(() => {
    if(itineraries && itineraries.length > 0) setSelectedTime(itineraries[0].time)
  }, [])

  if (loadError) return "Error";
  if (!isLoaded) return "";

  return (
    <>
      <Row gutter={[0,0]} className="itinerary-main">
        <Col xxl={11} xl={11} lg={10} md={10} sm={10} xs={10} style={{ zIndex: 1 }}>
          <Card className="rounded-0 border-0 shadow-1 h-100vh overflow-auto">
            <Navbar className="position-absolute bg-transparent w-100" style={{ zIndex: 1 }}>
              <Row gutter={[0,0]} className="w-100 align-items-center">
                <Col span={11}>
                  <div className="d-flex">
                    <Image 
                      width={40} 
                      height={40} 
                      onClick={goHome}
                      className="hover-pointer" 
                      src="/static/images/logo-square-white.png" 
                      alt="TRAVELHACK" 
                    />
                  </div>
                </Col>
              </Row>
            </Navbar>

            <div className="position-relative">
              <Card.Img variant="top" src="/static/images/tmp/bali.jpeg" />
              <div className="PlacesDocument__scrim"></div>
              <div className="position-absolute w-100 PlacesDocument__header">
                <h2 className="text-gray-2 font-weight-bold text-capitalize">Yuk trip bali</h2>
              </div>
            </div>

            <Card.Body>
              <div className="d-flex flex-column mt-4 mb-3">
                <div className="d-block d-sm-flex align-items-center mb-2">
                  <div className="d-flex flex-column flex-grow-1 mr-4">
                    <div className="d-flex flex-row align-items-center">
                      <div className="mr-3">
                        <Image
                          width={50}
                          height={50}
                          quality={50}
                          src={'/static/images/tmp/avatar.jpeg'}
                          alt={'profile'}
                          placeholder="blur"
                          className="rounded-circle img-fit"
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <div className="d-flex flex-row align-items-center fs-16">
                          Albert Suzenso
                        </div>
                        <div className="d-md-flex flex-row flex-wrap text-muted fs-12">
                          <Space size={5}>
                            <span>28 Juni 2021</span>·
                            <span>3 views</span>
                          </Space>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <Space size={5}>
                      <Button className="px-1" size="large" type="text" icon={<i className="far fa-heart mr-1" />}>381</Button>
                      <Button className="px-1" size="large" type="text" icon={<i className="far fa-comment-alt mr-1" />}>3</Button>
                      <Button className="px-1" size="large" type="text" icon={<i className="far fa-share" />} />
                    </Space>
                  </div>

                </div>
              </div>

              <Divider orientation="left" className="mb-3 mt-4 fs-14 text-gray-9">Driver / Translator</Divider>

              <Space className="mb-2" size={20}>
                <Card className="mt-3 border-0 shadow">
                  <div className="text-center">
                    <img src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/VhIpjXrtoIOY6S8R" width="50" height="50" className="img-fit rounded-circle mt-n4 shadow" />
                  </div>
                  <Card.Body className="pb-3 px-3 pt-2 text-center">
                    <h6 className="fs-14 mb-1">Okky Suardhana</h6>
                    <p className="fs-13 mb-1 text-muted">085154545456</p>
                    <Tag color="#f0f0f0" className="text-gray-8 bor-rad-5px fs-11">Driver</Tag>
                  </Card.Body>
                </Card>

                <Card className="mt-3 border-0 shadow">
                  <div className="text-center">
                    <img src="https://itin-dev.sfo2.cdn.digitaloceanspaces.com/profilePicture/xvej9yjl2q4vaMvs" width="50" height="50" className="img-fit rounded-circle mt-n4 shadow" />
                  </div>
                  <Card.Body className="pb-3 px-3 pt-2 text-center">
                    <h6 className="fs-14 mb-1">Komang Suhendra</h6>
                    <p className="fs-13 mb-1 text-muted">085154545456</p>
                    <Tag color="#f0f0f0" className="text-gray-8 bor-rad-5px fs-11">Translator</Tag>
                  </Card.Body>
                </Card>
              </Space>

              <Divider orientation="left" className="mb-3 mt-4 fs-14 text-gray-9">Itineraries</Divider>

              <Tabs type="card" onChange={onTabChange} activeKey={selectedTime} className="tab-itineraries">
                {itineraries.map(item => (
                  <Tabs.TabPane tab={<RenderDateTab date={item.time} />} key={item.time}>
                    <Card className="mb-3 border-0 card-notes">
                      <Card.Body>
                        <h6 className="font-weight-bold">Notes: </h6>
                        <div>
                          <span
                            style={{
                              color: "rgb(33, 37, 41)",
                              fontFamily:
                                '"Source Sans Pro", -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                              fontStyle: "normal",
                              fontVariantLigatures: "normal",
                              fontVariantCaps: "normal",
                              fontWeight: 400,
                              letterSpacing: "normal",
                              orphans: 2,
                              textAlign: "left",
                              textIndent: 0,
                              textTransform: "none",
                              whiteSpace: "normal",
                              widows: 2,
                              wordSpacing: 0,
                              WebkitTextStrokeWidth: 0,
                              textDecorationThickness: "initial",
                              textDecorationStyle: "initial",
                              textDecorationColor: "initial",
                              float: "none",
                              display: "inline !important"
                            }}
                          >
                            Actually there are still many beautiful famous beach and hidden beaches in Bali that are not included in the list that I made, but this time I only made a list of beaches that are usually must-visit and easy to reach.
                          </span>
                        </div>
                      </Card.Body>
                    </Card>

                    {item.places && item.places.length > 0 && item.places.map((place, idx) => (
                      <div key={idx}>
                        <div 
                          onClick={() => onCardPlaceClick(place, idx+1)}
                          className="d-flex flex-row mw-100 align-items-baseline card-left-itinerary"
                        >
                          <div className="col-auto pl-0 pr-2 text-center" style={{ width: 30, zIndex: 1 }}>
                            <img src={MarkerIcon} className="mr-2" width="24" height="32" />
                            <div className="centered-idx small text-white">{idx+1}</div>
                          </div>
                          <div className="col p-0">
                            <Card className="border-0 bor-rad-10px card-view-places">
                              <Card.Body className="p-3 pl-4 font-weight-bold">
                                <Media>
                                  <Media.Body>
                                    <p className="mb-0"> {place.name} </p>
                                    <p className="text-muted mb-0 font-weight-normal">{place.vicinity ? place.vicinity : place.address}</p>
                                  </Media.Body>
                                  <div className="img-itinerary-card-view">
                                    <AntImage
                                      width={200}
                                      height={120}
                                      className="img-fit bor-rad-5px shadow-1"
                                      src={place.icon}
                                      alt={place.name}
                                    />
                                  </div>
                                </Media>
                                
                              </Card.Body>
                            </Card>
                          </div>
                        </div>

                        <div className={`BlockDividerContainer BlockDividerDefault ${(idx+1) === item.places.length && 'last-divider'}`}>
                          <div className="BlockDividerDefault__desktop d-sm-flex">
                            <div className="BlockDividerDefault__verticalLine">
                              <svg className="DashedLine" style={{ width: 2 }}>
                                <line x1={1} x2={1} y1={1} y2="50%"
                                  style={{ strokeDasharray: "1, 5", stroke: "rgb(206, 212, 218)", strokeWidth: 2, strokeLinecap: "round" }}
                                />
                              </svg>
                            </div>
                            <div style={{ width: 45 }} />
                            <div className="BlockDividerDefault__rightOfAdd">
                              <Space size={5}>
                                <i className="fas fa-car mr-2" /> 
                                <span>{Math.floor(Math.random() * 100)} min drive</span>·
                                <span>{Math.floor(Math.random() * 51)} mi</span>·
                                <a>Direction</a>
                              </Space>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Tabs.TabPane>
                ))}
              </Tabs>
            </Card.Body>
          </Card>
        </Col>

        <Col xxl={13} xl={13} lg={14} md={14} sm={14} xs={14}>
          <GoogleMap
            zoom={12}
            center={center}
            onLoad={onMapLoad}
            onDragEnd={dragEnd}
            options={GMapsOptions}
            mapContainerStyle={mapContainerStyle}
          >
            {itineraries[idxItinerary] && 
             itineraries[idxItinerary].places && 
             itineraries[idxItinerary].places.length > 0 && itineraries[idxItinerary].places.map((place, i) => (
              <Marker
                key={place.name}
                animation="BOUNCE"
                icon={markerOptions}
                label={{
                  text: (i+1).toString(),
                  className: 'text-center mt-n1 fs-15 text-white',
                }}
                position={place.position}
                onMouseOut={onMouseOut}
                onClick={() => onMarkerClick(place, i+1)}
                onMouseOver={() => onMouseOver(place)}
              />
             ))
            }
            {itineraries[idxItinerary] && 
             itineraries[idxItinerary].places && 
             itineraries[idxItinerary].places.length > 1 && (
              <DirectionsServiceMemo 
                travelMode="DRIVING"
                callback={directionsCallback}
                raw_waypoints={itineraries[idxItinerary].places}
              />
            )}
            {directionsRendererResponse !== null && (
              <DirectionsRendererMemo
                directions={directionsRendererResponse}
                selectedPlaceLength={itineraries[idxItinerary] && itineraries[idxItinerary].places && itineraries[idxItinerary].places.length}
              />
            )}

            {infoWindowContent}
          </GoogleMap>

          <CardDetailPlaceMapMemo
            markerClicked={markerClicked}
            setMarkerClicked={setMarkerClicked}
          />
        </Col>
      </Row>


      <style jsx>{Style}</style>
      <style jsx>{MapStyle}</style>
      <style jsx>{`
      :global(.centered-idx) {
        position: absolute;
        top: 43%;
        left: 40%;
        transform: translate(-50%, -50%);
        font-size: 12px;
      }
      :global(.card-view-places) {
        margin-left: -1.1rem!important;
        background-color: var(--gray-4);
      }

      :global(.BlockDividerContainer) {
        padding: 3px 0;
        opacity: 1;
        min-height: 32px;
      }
      :global(.BlockDividerContainer.last-divider) {
        opacity: 0;
        min-height: 32px;
      }
      :global(.BlockDividerDefault__desktop) {
        display: -webkit-flex;
        display: flex;
        position: relative;
        -webkit-align-items: center;
        align-items: center;
        min-height: 32px;
      }
      :global(.BlockDividerDefault__verticalLine) {
        position: absolute;
        left: 37px;
        height: 100%;
        width: 2px;
        opacity: 1;
        transition: opacity .25s;
      }
      :global(.BlockDividerDefault__rightOfAdd) {
        padding-left: 16px;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-grow: 1;
        flex-grow: 1;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
        -webkit-align-items: center;
        align-items: center;
        font-size: 12px;
        color: var(--gray-8);
      }
      :global(.PlacesDocument__scrim) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(180deg ,rgba(0,0,0,.4) 0,rgba(0,0,0,.3) 20%,transparent 50%,rgba(0,0,0,.3) 75%,#000);
      }
      :global(.PlacesDocument__header) {
        color: #f3f4f5;
        padding: 20px 32px;
        bottom: 0;
      }

      :global(.tab-itineraries.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab) {
        border-radius: 5px 5px 0 0;
      }
      :global(.tab-itineraries.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab, .ant-tabs-card.ant-tabs-bottom > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab, .ant-tabs-card.ant-tabs-bottom > div > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab) {
        margin-left: 5px;
      }
      :global(.tab-itineraries.ant-tabs-card > .ant-tabs-nav .ant-tabs-tab, .ant-tabs-card > div > .ant-tabs-nav .ant-tabs-tab) {
        padding: 5px 18px;
      }


      :global(.card-left-itinerary:hover) {
        cursor: pointer;
      }

      :global(.card-notes) {
        border-radius: 10px!important;
        background-color: var(--gray-3);
      }

      :global(.img-itinerary-card-view .ant-image-mask) {
        border-radius: 5px;
      }
      :global(.img-itinerary-card-view .ant-image-mask .ant-image-mask-info .anticon.anticon-eye) {
        vertical-align: text-bottom;
      }
      `}</style>
    </>
  )
}

export default DetailViewItinerary
