# dtg-assignment

### :Projede kullanilan teknoloji ve diller:

-Gelistirme dili olarak Javascript kullanildi
-Frontend kisminda React.js kullanildi
-Backend kisminda Node.js Express kullanildi

2 :Frontend kisminda kullanilan araclar ve kutuphaneler: 

-Google Fonts
-Font Awesome
-Bootstrap
-Axios (Http request icin)

3 :Backend kisminda kullanilan araclar ve kutuphaneler: : 

-Express.js
-Nodemon
-Concurrently

4 :Hosting: Heroku

5 :Proje icerigi ile ilgili aciklama: 

-Frontend kisminda Javascriptin oncu frameworklarindan biri olan React.js kullandim. Function componentler ve Hook yapilari ile calistim. State Management icin 'Context API'
yapisini kullandim. Frontend kismindan gerekli verileri fetch edebilmek icin 'axios' isimli kutuphaneyi kullandim. Veri alisi sirasinda aysnc-await yapisini kullandim.

-Element stilleri icin Scss(SaSS) kullandim. Daha dinamik bir kullanim sagliyor.

-Reducer Typelarini manuel olarak types.js dosyasinda tanimladim. Cok fazla state islemi gerektiren bir durum olmadigi icin sadece 2 adet type kullanildi

-React Router eklemek istedim fakat sayfa icerisinde switch olacak sayfa olmadigi icin kullanmadim

-Chart kutuphanesi olarak HighChart kullandim.


6 :Backend icerigi ile ilgili aciklama

-Backend kismini da tipki frontend gibi Javascript ile yazmak istedigim icin Node.Js Express kullandim. Gerekli server ayarlamalarini (Port , Production kontrolu vs) yapip, route dizini
ve route olusturdum. Route icerisinde elimdeki json dosyasini alip kontrolden sonra response olarak dondum.

-Package.json dosyasina gerekli scriptleri ekledim (Heroku post-build , React ve Expressin ayni anda calismasini saglayan script vs.)
 
Proje Canli linki : https://powerful-mountain-27095.herokuapp.com/

