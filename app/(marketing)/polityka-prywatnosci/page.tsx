import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Polityka Prywatności | Roksana Głowińska",
  description: "Polityka Prywatności strony internetowej roksanaglowinska.pl",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 container mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-12 text-foreground">
          POLITYKA PRYWATNOŚCI
        </h1>
        
        <div className="text-black font-light leading-relaxed space-y-6 text-base md:text-lg">
          
          <p className="font-bold">
            POLITYKA PRYWATNOŚCI STRONY INTERNETOWEJ ROKSANAGLOWINSKA.PL
          </p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 1. POSTANOWIENIA OGÓLNE
          </h2>
          <p>Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych użytkowników strony internetowej dostępnej pod adresem roksanaglowinska.pl, dalej jako „Strona internetowa”.</p>
          <p>Administratorem danych osobowych jest Roksana Głowińska, prowadząca działalność gospodarczą pod firmą LIRYKA Roksana Głowińska z siedzibą w Rzeszowie, ul. Podwisłocze 27/91, 35-309 Rzeszów, NIP: 8133387864, REGON: 181119350, dalej jako „Administrator”.</p>
          <p>Kontakt z Administratorem w sprawach dotyczących ochrony danych osobowych możliwy jest pod adresem e-mail: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a>.</p>
          <p>Dane osobowe są przetwarzane zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r., dalej jako „RODO”, oraz ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 2. CELE I PODSTAWY PRZETWARZANIA DANYCH
          </h2>
          <p>Administrator może przetwarzać dane osobowe w następujących celach:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>zawarcia i wykonania umowy, w tym realizacji zakupu produktów cyfrowych, e-booków, kursów online, dostępu do platform lub innych materiałów cyfrowych oraz realizacji usług, w szczególności konsultacji, mentoringów i innych form współpracy – na podstawie art. 6 ust. 1 lit. b RODO;</li>
            <li>obsługi płatności i rozliczeń związanych z zakupem produktów lub usług – na podstawie art. 6 ust. 1 lit. b RODO oraz, jeżeli przetwarzanie wynika z obowiązków prawnych Administratora, art. 6 ust. 1 lit. c RODO;</li>
            <li>wystawienia faktur oraz prowadzenia dokumentacji księgowej i podatkowej – na podstawie art. 6 ust. 1 lit. c RODO;</li>
            <li>obsługi reklamacji, odstąpień od umowy oraz dochodzenia lub obrony roszczeń – na podstawie art. 6 ust. 1 lit. c RODO oraz art. 6 ust. 1 lit. f RODO;</li>
            <li>obsługi kontaktu z Administratorem, w tym odpowiedzi na wiadomości przesłane za pomocą formularzy dostępnych na Stronie internetowej, poczty elektronicznej lub innych kanałów komunikacji – na podstawie art. 6 ust. 1 lit. f RODO, a jeżeli kontakt zmierza do zawarcia umowy – również art. 6 ust. 1 lit. b RODO;</li>
            <li>świadczenia usługi Focuslettera/newslettera, w tym przesyłania treści informacyjnych, edukacyjnych, promocyjnych i marketingowych dotyczących działalności, produktów i usług Administratora – na podstawie zgody użytkownika, zgodnie z art. 6 ust. 1 lit. a RODO;</li>
            <li>obsługi zapisów na listy zainteresowanych, listy oczekujących lub listy pierwszeństwa, w tym przekazywania informacji dotyczących planowanego uruchomienia określonych produktów, usług, kursów, platform lub innych projektów Administratora – na podstawie art. 6 ust. 1 lit. a RODO, jeżeli podstawą przetwarzania jest zgoda użytkownika;</li>
            <li>zapewnienia prawidłowego działania Strony internetowej, jej bezpieczeństwa, prowadzenia analityki i statystyk oraz poprawy jej funkcjonalności – na podstawie art. 6 ust. 1 lit. f RODO, a w zakresie, w którym wykorzystanie określonych technologii wymaga zgody użytkownika – na podstawie udzielonej zgody.</li>
          </ul>
          <p>W zależności od celu przetwarzania Administrator może przetwarzać w szczególności następujące kategorie danych osobowych: imię i nazwisko, adres e-mail, numer telefonu, dane do faktury, w tym firmę, adres i numer NIP, informacje dotyczące zakupionych produktów lub usług, dane dotyczące płatności, dane związane z realizacją kursów, konsultacji, mentoringów lub innych usług, dane dotyczące reklamacji lub odstąpienia od umowy, treść korespondencji, dane podane w formularzach dostępnych na Stronie internetowej oraz dane techniczne związane z korzystaniem ze Strony internetowej, takie jak adres IP, informacje o urządzeniu, przeglądarce, systemie operacyjnym, aktywności na stronie oraz plikach cookies.</p>
          <p>Podanie danych osobowych jest dobrowolne, ale w określonych przypadkach może być niezbędne do zawarcia i wykonania umowy, dokonania zakupu, uzyskania dostępu do produktu cyfrowego lub kursu, realizacji usługi, wystawienia faktury, obsługi reklamacji, kontaktu z Administratorem, zapisania się na listę zainteresowanych albo korzystania z Focuslettera/newslettera.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 3. OKRES PRZECHOWYWANIA DANYCH
          </h2>
          <p>Dane osobowe są przechowywane przez okres niezbędny do realizacji celu, dla którego zostały zebrane, a następnie przez okres wymagany przepisami prawa albo okres niezbędny do ustalenia, dochodzenia lub obrony roszczeń.</p>
          <p>Dane przetwarzane w celu zawarcia i wykonania umowy, realizacji zakupu, świadczenia usług, obsługi reklamacji, odstąpienia od umowy lub korespondencji są przechowywane przez czas niezbędny do realizacji danego celu, a następnie przez okres wynikający z właściwych przepisów dotyczących przedawnienia roszczeń.</p>
          <p>Dane przetwarzane w celach księgowych i podatkowych, w szczególności dane zawarte na fakturach i innych dokumentach księgowych, są przechowywane przez okres wymagany obowiązującymi przepisami prawa podatkowego i rachunkowego.</p>
          <p>Dane przetwarzane na podstawie zgody, w szczególności w celu wysyłki Focuslettera/newslettera lub obsługi list zainteresowanych i list oczekujących, są przechowywane do czasu cofnięcia zgody lub do czasu, gdy cel, dla którego zgoda została udzielona, przestanie istnieć. Po cofnięciu zgody określone dane mogą być przechowywane w ograniczonym zakresie przez okres niezbędny do wykazania prawidłowości uzyskania zgody lub obrony przed ewentualnymi roszczeniami.</p>
          <p>Dane techniczne, eksploatacyjne oraz dane związane z plikami cookies są przechowywane przez okres wynikający z ustawień danego narzędzia, pliku cookies lub przeglądarki internetowej, nie dłużej niż przez okres niezbędny do realizacji celu, w jakim są wykorzystywane.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 4. ODBIORCY DANYCH
          </h2>
          <p>Dane osobowe mogą być przekazywane podmiotom współpracującym z Administratorem wyłącznie w zakresie niezbędnym do realizacji określonych celów.</p>
          <p>Odbiorcami danych mogą być w szczególności:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>dostawcy hostingu, domeny, poczty elektronicznej, systemów informatycznych oraz narzędzi technicznych wykorzystywanych do obsługi Strony internetowej;</li>
            <li>dostawcy zewnętrznych systemów sprzedażowych, koszyków zakupowych oraz narzędzi służących do obsługi zamówień;</li>
            <li>operatorzy płatności elektronicznych, banki oraz inne podmioty uczestniczące w obsłudze płatności;</li>
            <li>dostawcy platform wykorzystywanych do udostępniania kursów online, produktów cyfrowych, materiałów edukacyjnych lub innych treści;</li>
            <li>dostawcy narzędzi do obsługi Focuslettera/newslettera, formularzy oraz list zainteresowanych;</li>
            <li>dostawcy narzędzi analitycznych i statystycznych, w tym usług świadczonych przez Google, w zakresie wynikającym z wykorzystywanych na Stronie internetowej narzędzi oraz udzielonych przez użytkownika zgód;</li>
            <li>dostawcy narzędzi wykorzystywanych do komunikacji, organizacji konsultacji, mentoringów lub innych usług online;</li>
            <li>podmioty świadczące Administratorowi usługi księgowe, podatkowe, prawne, administracyjne lub techniczne;</li>
            <li>organy publiczne lub inne podmioty uprawnione do otrzymania danych na podstawie obowiązujących przepisów prawa.</li>
          </ul>
          <p>Jeżeli w związku z korzystaniem przez Administratora z określonych usług lub narzędzi dane osobowe są przekazywane poza Europejski Obszar Gospodarczy, przekazanie odbywa się zgodnie z wymogami RODO oraz przy zastosowaniu odpowiednich mechanizmów i zabezpieczeń przewidzianych prawem.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 5. PRAWA OSÓB, KTÓRYCH DANE DOTYCZĄ
          </h2>
          <p>Osobie, której dane dotyczą, przysługuje – w przypadkach przewidzianych przez RODO – prawo do:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>dostępu do danych – art. 15 RODO;</li>
            <li>sprostowania danych – art. 16 RODO;</li>
            <li>usunięcia danych – art. 17 RODO;</li>
            <li>ograniczenia przetwarzania – art. 18 RODO;</li>
            <li>przenoszenia danych – art. 20 RODO;</li>
            <li>wniesienia sprzeciwu wobec przetwarzania danych – art. 21 RODO;</li>
            <li>cofnięcia zgody w dowolnym momencie, jeżeli przetwarzanie odbywa się na podstawie zgody – art. 7 ust. 3 RODO.</li>
          </ul>
          <p>Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem.</p>
          <p>W celu realizacji swoich praw należy skontaktować się z Administratorem pod adresem e-mail: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a>.</p>
          <p>Osoba, której dane dotyczą, ma prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych, jeżeli uzna, że przetwarzanie jej danych osobowych narusza przepisy RODO.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 6. FOCUSLETTER / NEWSLETTER ORAZ LISTY ZAINTERESOWANYCH
          </h2>
          <p>Użytkownik może dobrowolnie zapisać się do Focuslettera/newslettera prowadzonego przez Administratora.</p>
          <p>W ramach Focuslettera/newslettera Administrator może przesyłać na podany adres e-mail treści informacyjne, edukacyjne, promocyjne i marketingowe dotyczące działalności Administratora oraz jego produktów, usług, kursów i innych projektów.</p>
          <p>Użytkownik może również dobrowolnie zapisywać się za pomocą formularzy dostępnych na Stronie internetowej na listy zainteresowanych, listy oczekujących lub listy pierwszeństwa dotyczące określonych produktów, usług, kursów, platform lub innych projektów.</p>
          <p>Zapis odbywa się na podstawie dobrowolnej zgody użytkownika.</p>
          <p>Zgoda może zostać cofnięta w każdym czasie, w szczególności poprzez kliknięcie linku rezygnacji znajdującego się w otrzymanej wiadomości e-mail lub poprzez kontakt z Administratorem.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 7. PLIKI COOKIES I NARZĘDZIA ANALITYCZNE
          </h2>
          <p>Strona internetowa wykorzystuje pliki cookies oraz podobne technologie.</p>
          <p>Pliki cookies mogą być wykorzystywane w szczególności w celu zapewnienia prawidłowego działania Strony internetowej, zapamiętywania ustawień użytkownika, zapewnienia bezpieczeństwa, prowadzenia statystyk, analizowania sposobu korzystania ze Strony internetowej oraz prowadzenia działań marketingowych – jeżeli użytkownik wyraził wymaganą zgodę.</p>
          <p>W ramach Strony internetowej mogą być wykorzystywane cookies niezbędne, funkcjonalne, analityczne oraz marketingowe.</p>
          <p>Strona internetowa może korzystać z narzędzi analitycznych dostarczanych przez Google, służących w szczególności do analizy ruchu na stronie, sposobu korzystania z niej oraz skuteczności poszczególnych treści i działań.</p>
          <p>Wykorzystywanie cookies i podobnych technologii, które nie są niezbędne do prawidłowego działania Strony internetowej, odbywa się zgodnie z obowiązującymi przepisami oraz – jeżeli jest to wymagane – po uzyskaniu zgody użytkownika.</p>
          <p>Użytkownik może zarządzać swoimi zgodami za pomocą banera lub panelu zarządzania zgodami cookies dostępnego na Stronie internetowej oraz poprzez ustawienia swojej przeglądarki.</p>
          <p>Ograniczenie lub wyłączenie niektórych plików cookies może wpłynąć na działanie Strony internetowej lub niektórych jej funkcjonalności.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 8. ZEWNĘTRZNE SERWISY I SYSTEMY SPRZEDAŻOWE
          </h2>
          <p>Strona internetowa może zawierać odnośniki prowadzące do zewnętrznych serwisów, platform, systemów sprzedażowych, koszyków zakupowych, operatorów płatności lub innych usług wykorzystywanych w związku z działalnością Administratora.</p>
          <p>W przypadku przejścia do zewnętrznego serwisu określone dane mogą być przetwarzane również zgodnie z zasadami obowiązującymi u dostawcy danego serwisu lub usługi.</p>
          <p>Administrator zaleca zapoznanie się z informacjami dotyczącymi prywatności udostępnianymi przez dostawców zewnętrznych usług, z których korzysta użytkownik.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 9. ZAUTOMATYZOWANE PODEJMOWANIE DECYZJI
          </h2>
          <p>Administrator nie podejmuje wobec użytkowników decyzji opartych wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, które wywoływałyby wobec nich skutki prawne lub w podobny sposób istotnie na nich wpływały.</p>
          <p>Administrator może wykorzystywać dane w celach analitycznych lub marketingowych, w tym do analizy skuteczności prowadzonych działań, jeżeli pozwalają na to obowiązujące przepisy prawa lub użytkownik wyraził wymaganą zgodę.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 10. BEZPIECZEŃSTWO DANYCH
          </h2>
          <p>Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu zapewnienie ochrony przetwarzanych danych osobowych odpowiedniej do ryzyka związanego z ich przetwarzaniem.</p>
          <p>Dostęp do danych osobowych mają wyłącznie osoby i podmioty, dla których jest to niezbędne do wykonywania powierzonych im zadań lub świadczenia usług na rzecz Administratora.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 11. POSTANOWIENIA KOŃCOWE
          </h2>
          <p>Administrator może zmienić Politykę Prywatności w szczególności w przypadku zmiany przepisów prawa, funkcjonalności Strony internetowej, wykorzystywanych narzędzi, zakresu świadczonych usług lub sposobów przetwarzania danych.</p>
          <p>Aktualna wersja Polityki Prywatności jest dostępna na stronie internetowej roksanaglowinska.pl.</p>
          <p>Niniejsza Polityka Prywatności obowiązuje od dnia 29.09.2026 r.</p>
        </div>
      </section>
    </main>
  );
}
