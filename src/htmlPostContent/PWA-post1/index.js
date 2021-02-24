const data = { id: "ckl0zu58g8jo50a58awz558gd", html: ` <h2>Wstęp</h2>
<p>W tym artykule dowiesz się, o co chodzi z PWA, jakie korzyści możesz osiągnąć stosując tą technologią oraz co musisz zrobić, aby rozpocząć pracę z Progressive Web Apps. Jest to pierwszy z serii artykułów na ten temat. W kolejnych wpisach stworzymy
    aplikację PWA zarówno na statycznej stronie HTML oraz jak zaimplementować to rozwiązanie w React.js.</p>

<h2>Czym są Progressive Web Apps</h2>
<p>Na wstępie wypadałoby wyjaśnić czym w ogóle są omawiane progresywne aplikacje webowe i dlaczego w ogóle się je stosuje. Można by powiedzieć, że PWA to naturalna konsekwencja rozwoju RWD oraz podążaniem za ideą “mobile first”. Bez zbędnego przedłużania,
    PWA sprawia, że strony czy też aplikacje webowe swoim zachowaniem przypominają natywne aplikacje mobilne. To zachowanie z grubsza polega na tym, że taka aplikacja może zostać zainstalowana na urządzeniu użytkownika, i co najważniejsze może (ale
    nie musi) działać offline. Generalnie wygląda to tak, że użytkownik wchodząc na Twoją stronę, otrzyma informacje o możliwości instalacji aplikacji, jak widzisz wszystko odbywa się bardzo sprawnie i jest przyjazne dla użytkownika. Tego typu aplikacje
    będą działały szybko, ponieważ część zasobów strony zostanie zapisana w pamięci podręcznej. Ta cecha umożliwia też działanie aplikacji offline. Ty jako developer, możesz zdecydować, które części aplikacji będą dostępne offline a które nie.</p>

<h2>PWA vs Aplikacje natywne.</h2>
<p>PWA posiadają szereg zalet, ale trzeba pamiętać, że są czymś innym niż aplikacje natywne.</p>

<h3>Zalety Progressive Web Apps </h3>
<ul>
    <li>
        <strong>Łatwość instalacji</strong> - Aplikacje PWA nie wymaga wprowadzania do sklepu, czy to Google Play Store czy App Store. Instalacja odbywa się przez przeglądarkę.
    </li>
    <li>
    <strong>Aktualizacja aplikacji</strong> - Tutaj także mamy łatwiej, ponieważ aplikacja zaktualizuje się automatycznie, Service Worker sprawdzi czy na stronie są zmiany, i zaktualizuje aplikację.
    </li>
    <li>
    <strong> Działanie offline</strong> - Dzięki plikowi Service Worker oraz ceshowaniu zasobów, możesz umożliwić dostęp do funkcjonalności swojej strony, nawet jeśli użytkownik jest offline.
    </li>
    <li>
    <strong>Powiadomienia Push</strong> - Aplikacje PWA wspierają powiadomienia push.
    </li>
    <li>
    <strong>Uniwersalność</strong> - PWA w zasadzie będzie działać na każdym systemie operacyjnym, który obsługuje przeglądarkę internetową zdolną do instalacji takiej aplikacji. Ten sam kod będzie działał na Androidzie iOS czy Windows.
    </li>
</ul>
<h3>Wady PWA </h3>
<p>Tak naprawdę ciężko mówić tutaj o wadach, ponieważ bezpośrednie porównywanie ich z aplikacjami natywnymi, moim zdaniem mija się z celem. PWA nie są tym samym i mają inne zastosowanie niż aplikacje natywne. Te pierwsze służa do poprawy działania naszej
    strony, sprawiają, że użytkownik może korzystać z niej w trybie offline, dają możliwość wysyłania wiadomości PUSH. Tak naprawdę powinniśmy mówić o ich ograniczeniach. PWA nie mają dostępu do wielu podzespołów urządzenia. Jeżeli chcesz stworzyć
    aplikację wykorzystującą zaawansowane funkcje systemowe, to powinieneś skorzystać z aplikacji napisanych na dany system operacyjny, np Android czy iOS.</p>

<h2>Jak stworzyć aplikację PWA</h2>

<p>Skoro już z grubsza wiemy o co tyle szumu z tym PWA, warto zacząć pisać o tym jak taką aplikację w ogóle stworzyć. Po pierwsze musisz wiedzieć, że istnieje kilka podstawowych wymogów które muszą być spełnione aby przeglądarka umożliwiła instalację
    twojej aplikacji. </p>

<ul>
    <li>
    <strong>Bezpieczne połączenie</strong> - twoja domena musi posiadać certyfikat ssl. To jest wymóg konieczny, bez tego service worker nie zostanie zainstalowany.
    </li>


    <li>
    <strong> Strona musi być responsywna </strong>- Musisz dostosować swoją stronę do urządzeń mobilnych.
    </li>
    <li>
    <strong> Plik manifest.json </strong>- Jest to specjalny plik, zawierający informacje o naszej aplikacji, np ikony aplikacji, nazwę czy sposób wyświetlania.
    </li>


    <li>
    <strong> Service Worker</strong>- Jest to skrypt w którym dzieje się cała magia PWA, obsługuje on powiadomienia czy zarządza pamięcią podręczną.
    </li>


    <li>
    <strong>meta tag theme-color</strong> - <code>&ltmeta name="theme-color" content="#4285f4"&gt</code> umieszczony w head strony. Dodaje motyw kolorystyczny do naszej strony. Motyw ten będzie widoczny w UI przeglądarki mobilnej, zmieni się np. kolor paska
        nawigacyjnego.
    </li>
</ul>
<p>Tak naprawdę jeśli posiadasz nowoczesną stronę internetową zbyt wiele nie musisz robić aby z PWA wystartować, wystarczy dodać plik manifest oraz service worker. Dzieję się tak, ponieważ aplikacja PWA to w zasadzie strona internetowa.</p>

<h3>Plik manifest</h3>
<p>Jest to plik w formacie JSON, w tym pliku muszą znaleźć się informacje o naszej aplikacji takie jak: nazwa, linki do ikon, sposób otwierania aplikacji. Część rzeczy jest opcjonalna a część niezbędna. W tym artykule nie będę omawiał wszystkich właściwości,
    jeśli chcesz zapoznać się z tematem głębiej możesz zajrzeć <a title=\ "https://developer.mozilla.org/en-US/docs/Web/Manifest\" href=\ "https://developer.mozilla.org/en-US/docs/Web/Manifest\">Tutaj </a></p>
<p>Takie niezbędne minimum to:</p>
<ul>
    <li>
    <strong>name albo short_name</strong> - Jak sama nazwa wskazuje, jest to nazwa aplikacji, najlepiej wprowadzić dwie wartości, jeśli name będzie zbyt długie, to wyświetlana będzie wartość short_name .
    </li>
    <li>
    <strong>icons</strong> - Tutaj znajdzie się tablica zawierająca informacje o ikonach. Ikony podajemy w kilku rozdzielczościach, urządzenie końcowe samo dobierze sobie najbardziej odpowiedni rozmiar do wyświetlenia. Dla każdej ikony trzeba zdefiniować ścieżkę dostępu,
        jej rozmiar oraz typ. Jeśli chodzi o to jakie rozmiary stosować, to w sieci można znaleźć wiele wytycznych, ja proponuje taki zbiór: 48x48 ; 72x72; 96x96; 144x144; 192x192; 256x256; 384x384; 512x512
    </li>


    <li>
    <strong> start_url</strong> - Jest to adres, który wskazuje na jakiej stronie powinna otwierać się aplikacja.
    </li>


    <li>
    <strong> display</strong> - określa sposób wyświetlania aplikacji, to z jakimi elementami interfejsu przeglądarki aplikacja będzie uruchamiana. Dopuszczalne wartości to :
    </li>

    <li>
    <strong> fullscreen </strong>- Aplikacja uruchomi się na całym ekranie, nie będzie widocznych żadnych elementów UI przeglądarki. Dobro rozwiązanie do gier.
    </li>



    <ul>
        <li>
        <strong>standalone</strong> - Aplikacja otwiera się w osobnym oknie, przypomina działaniem aplikację natywną. Nie wyświetla się np pasek adresu.
        </li>
    </ul>


    <ul>
        <li>
        <strong> minimal-ui </strong>- Wygląda podobnie do standalone ale wprowadza podstawowe elementy UI takie jak np cofanie czy odświeżanie
        </li>
    </ul>


    <ul>
        <li>
        <strong> browser</strong> - Aplikacja otwiera się w przeglądarce.
        </li>
    </ul>

    <ul>
        <li>
        <strong>  background_color </strong> - jest używany jako splash screen, jest to kolor ekranu powitalnego, czy też ekranu widocznego podczas uruchamiania aplikacji. Widoczny zwłaszcza przy pierwszym uruchomieniu, gdy aplikacja musi pobrać wszystkie niezbędne pliki z sieci.
        </li>
    </ul>
    <ul>
        <li>
        <strong>  theme_color </strong> - Pełni podobną funkcję co meta tag theme-color wartości w manifeście i w tagu powinny być takie same.
        </li>
    </ul>
    <ul>
        <li>
        <strong> scope</strong> - Określa jaki zakres strony uwzględniany jest jako aplikacja PWA, domyślnie brany jest katalog w którym znajduje się plik manifest.
        </li>
    </ul>
    <ul>
        <li>
        <strong>  description </strong>- Opis naszej aplikacji.
        </li>
    </ul>
</ul>
<p>Przykładowy manifest.json:</p>

    <pre data-copy>
    
        <code>
            {
                "name":"Seba koduje - Najlepszy blog o It w Polsce ",
                "short_name":"Seba koduje",
                "start_url":"/home",
                "display":"standalone",
                "background_color":"#fff",
                "theme_color":"#3367D6",
                "scope":"/",
                "description":"Tutaj powinien znaleźć się opis twojej aplikacji",
                "icons":[
                   {
                      "src":"images/touch/homescreen48.png",
                      "sizes":"48x48",
                      "type":"image/png"
                   }
                ]
             }
        </code>
    </pre>

<p>Plik manifest wrzucamy w katalog główny strony, musimy go podlinkować w head 
 </p>
 <code> &ltlink rel="manifest" href="/manifest.json&gt</code>


<p>Przedstawiony tutaj manifest to w zasadzie takie minimum, umożliwiające prawidłowe działanie aplikacji, w kolejnych wpisach pokażę na konkretnych projektach wykorzystanie tego pliku. Pokaże jak w praktyce tworzyć ikony, tak aby zawsze były dobrze
    wyświetlane niezależnie od urządzenia końcowego </p>

<h2>Plik Service Worker</h2>

<h3>Czym jest SW</h3>
<p>Na początku wypadałoby wyjaśnić czym w ogóle jest service worker. Najprościej jest to skrypt działający w tle, niezależnie od strony internetowej, mający dostęp do mechanizmu cache. Z poziomu tego pliku mamy dostęp do zasobów pobieranych przez przeglądarkę.
    W momencie gdy strona znajdzie się offline, service worker, może zwrócić zasoby z pamięci podręcznej. Co ważne Service Worker nie ma dostępu do drzewa DOM. SW obsługuje również mechanizm wiadomości Web Push.</p>

<h3>Jak działa SW</h3>
<p>Service Worker to skrypt działający w niezależnym wątku. Może on komunikować się ze stroną poprzez interfejs postMessage, po prostu można wysyłać wiadomości pomiędzy SW a skryptem działającym na stronie. </p>
<p>SW może znaleźć się w trzech stanach install waiting oraz active.</p>

<p><strong>Instalacja</strong> - gdy otworzysz stronę pierwszy raz, worker zostanie zainstalowany - Instalacje inicjujemy w kodzie JS na stronie, </p>

    <pre data-copy>
      <code>
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js');
            });
        }
      </code>
  </pre>

<p>Podczas instalacji podajemy ścieżkę do workera. Co jest tutaj istotne, to fakt, że możesz mieć kilka workerów na stronie a zakres w jakim będa działały zależy od tego gdzie plik service-worker.js zostanie zapisany.</p>
<p>W podanym przykładzie plik jest umieszczony w katalogu głównym “/”</p>
<p>więc worker będzie działał na całej stronie, włącznie ze wszystkimi subdomenami. Jeśli umieścimy plik w podkatalogu np, “/koty/service-worker.js” - taki worker będzie miał ograniczony dostęp w tym przypadku do wszystkich podstron “/koty”</p>

<p><strong>Waiting</strong> - Worker oczekuje na aktywację. Tutaj ważna uwaga, worker aktualizuje się automatycznie w tle. Jeżeli dokonamy zmian na stronie worker zadba o to, aby nasza aplikacja PWA zaktualizowała się automatycznie. Problem polega na
    tym, że w trakcie aktualizacji użytkownik może mieć, otwartych wiele sesji, np może mieć otworzoną nasza stronę w kilku zakładkach jednocześnie. Worker w momencie aktualizacji nie zostanie aktywowany od razu, aby uniknąć kolizji wersji. Dopiero
    po zamknięciu wszystkich aktywnych sesji na danym urządzeniu i otworzeniu aplikacji ponownie, zobaczymy wprowadzone zmiany. wtedy też worker przejdzie ze stanu waiting w stan active.</p>

<p><strong>Active</strong> - w tym stanie SW działa poprawnie, ma dostęp do żądań wysyłanych przez aplikację obsługuje wiadomości PUSH itd.</p>

<p>Wiele razy wspominałem o tym, że PWA aktualizuje się automatycznie, ale skąd przeglądarka wie, że istnieje nowsza wersja aplikacji? Mechanizm jest w zasadzie prosty, porównywany jest właśnie plik service worker. Przeglądarka porówna zapisany wcześniej
    plik z nowo pobranym i jeżeli jest inny, uruchomi proces aktywacji nowego workera, przechodząc przez kolejne cykle życia. </p>

<h3>Eventy w SW</h3>
<p>W SW możemy nasłuchiwać eventów, o te oparte jest praktycznie całe działanie workera, Pokaże tutaj najważniejsze.</p>

<p><strong>install event</strong> - odpala się w momencie instalacji workera. Podczas instalacji możemy, zapisać do pamięci podręcznej zdefiniowane wcześniej zasoby.</p>


    <pre data-copy><code>
        self.addEventListener('install', function(event) {
            event.waitUntil()
        });
 </code></pre>


<p><strong>activate</strong> - odpala się w momencie aktywacji, gdy nowy service workers zastępuje stary. Tutaj możemy zaktualizować cache.</p>


    <pre data-copy><code>
self.addEventListener('activate', function(event) {
    event.waitUntil();
});
</code></pre>

<p><strong>fetch</strong> - Odpala się w momencie gdy przeglądarka wysyła zapytanie o dany zasób, możemy to obsłużyć, np zwrócić zasób z pamięci cache. </p>


    <pre data-copy><code>
    self.addEventListener('fetch', function(event) {
        event.respondWith();
    });
</code></pre>


<h3>Cache w SW</h3>
<p>Wiemy już co się dzieje w workerze, teraz kilka słów o tym jak obsłużyć cachowanie danych. Istnieje wiele strategii w jaki sposób worker ma obsługiwać cache, oczywiście w tym wpisie nie będę szczegółowo się zagłębiał, bo to temat na osobny artykuł.
    Całe to cachowanie odbywa się poprzez<strong> Cache API (</strong><a title=\ "https://developer.mozilla.org/en-US/docs/Web/API/Cache\" href=\ "https://developer.mozilla.org/en-US/docs/Web/API/Cache\"><strong>link</strong></a><strong>) </strong>        Na początku możemy ustalić sobie dwa rodzaje cache, statyczny oraz dynamiczny.</p>

<p><strong>Cache statyczny</strong> - będzie na sztywno zdefiniowany. Sami wybierzemy jakie zasoby mają zostać zapisane w pamięci przeglądarki, te zasoby zostaną pobrane podczas instalacji oraz aktualizacji naszej aplikacji. Dzięki temu , będziemy mogli
    sprawić aby aplikacja działała offline. Zapiszemy np pliki HTML, CSS czy JS.</p>


    <pre data-copy><code>
    const staticCasheName = "myAppCacheStatic-v1.0"

    const static = [
        '/css/bootstrap.css',
        '/css/main.css',
        '/js/bootstrap.min.js',
        '/js/jquery.min.js',
        '/offline.html'
    ]
    self.addEventListener('install', function(event) {
        event.waitUntil(
            caches.open(staticCasheName).then(function(cache) {
                return cache.addAll(static);
            })
        );
    });

   </code></pre>


<p><strong>Cache dynamiczny</strong> - Zasoby będą zapisywane w trakcie korzystania z aplikacji. </p>


    <pre data-copy><code>
    self.addEventListener('fetch', function(event) {
        event.respondWith(
            caches.open('mysite-dynamic').then(function(cache) {
                return cache.match(event.request).then(function(response) {
                    return response || fetch(event.request).then(function(response) {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
            })
        );
    });

 </code></pre>


<h2>Kilka słów na koniec</h2>
<p>PWA to potężne narzędzie, przyśpiesza działanie stron, wprowadza obsługę offline, jednym słowem, przyczynia się do lepszego user experience. W tym wpisie starałem się opisać główne założenia i sposób działania tej technologii, jest to wstęp do serii
    artykułów. W kolejnym wpisie na przykładzie konkretnego projektu pokażę jak taką aplikację PWA stworzyć, omówię bardziej szczegółowo service workers. Także jeśli po przeczytaniu tego wpisu nadal nie wiesz jak stworzyć swoją aplikację, to zapraszam
    cię do dalszej lektury.</p>` }
module.exports.data = data;