import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Regulamin | Roksana Głowińska",
  description: "Regulamin sprzedaży i świadczenia usług roksanaglowinska.pl",
};

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 container mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-12 text-foreground">
          REGULAMIN
        </h1>
        
        <div className="text-black font-light leading-relaxed space-y-6 text-base md:text-lg">
          
          <p className="font-bold">
            REGULAMIN SPRZEDAŻY I ŚWIADCZENIA USŁUG ROKSANAGLOWINSKA.PL
          </p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 1. POSTANOWIENIA OGÓLNE
          </h2>
          <p>Strona internetowa dostępna pod adresem roksanaglowinska.pl prowadzona jest przez Roksanę Głowińską, prowadzącą działalność gospodarczą pod firmą LIRYKA Roksana Głowińska z siedzibą w Rzeszowie, ul. Podwisłocze 27/91, 35-309 Rzeszów, NIP: 8133387864, REGON: 181119350, adres poczty elektronicznej: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a>, dalej jako „Sprzedawca”.</p>
          <p>Niniejszy Regulamin określa zasady sprzedaży Produktów oraz świadczenia Usług oferowanych przez Sprzedawcę, w szczególności Kursów online, Treści cyfrowych, Usług indywidualnych oraz dostępu do Platformy subskrypcyjnej.</p>
          <p>Zakup Produktów lub Usług może odbywać się za pośrednictwem Strony internetowej albo zewnętrznego systemu sprzedażowego lub koszyka zakupowego, do którego prowadzą odnośniki znajdujące się na Stronie internetowej.</p>
          <p>Regulamin określa w szczególności zasady zawierania i wykonywania umów, dokonywania płatności, dostarczania Treści cyfrowych i Kursów online, świadczenia Usług, korzystania z Platformy subskrypcyjnej, odstąpienia od umowy oraz składania i rozpatrywania reklamacji.</p>
          <p>Zawarcie umowy wymaga zapoznania się z Regulaminem i jego akceptacji najpóźniej w chwili składania Zamówienia.</p>
          <p>Klient zobowiązany jest do korzystania ze Strony internetowej, Produktów i Usług w sposób zgodny z obowiązującym prawem, Regulaminem, zasadami współżycia społecznego i dobrymi obyczajami oraz w sposób nienaruszający praw Sprzedawcy ani osób trzecich.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 2. DEFINICJE
          </h2>
          <p>Użyte w Regulaminie pojęcia oznaczają:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dzień Roboczy</strong> – jeden dzień od poniedziałku do piątku, z wyłączeniem dni ustawowo wolnych od pracy.</li>
            <li><strong>Klient</strong> – osoba fizyczna, osoba prawna albo jednostka organizacyjna posiadająca zdolność prawną, która zawarła lub zamierza zawrzeć umowę ze Sprzedawcą.</li>
            <li><strong>Konsument</strong> – osoba fizyczna dokonująca ze Sprzedawcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową. Postanowienia Regulaminu dotyczące Konsumenta stosuje się również, w zakresie przewidzianym obowiązującymi przepisami, do osoby fizycznej zawierającej ze Sprzedawcą umowę bezpośrednio związaną z jej działalnością gospodarczą, jeżeli z treści tej umowy wynika, że nie posiada ona dla tej osoby charakteru zawodowego, wynikającego w szczególności z przedmiotu wykonywanej działalności gospodarczej ujawnionego w CEIDG.</li>
            <li><strong>Kurs online</strong> – Produkt cyfrowy obejmujący dostęp do materiałów edukacyjnych, nagrań, lekcji, modułów, plików, spotkań lub innych treści i elementów edukacyjnych, zgodnie z opisem konkretnego Kursu.</li>
            <li><strong>Treść cyfrowa</strong> – dane wytwarzane i dostarczane w postaci cyfrowej, w szczególności e-booki, workbooki, nagrania, materiały edukacyjne, szkoleniowe, pliki elektroniczne oraz inne materiały cyfrowe oferowane przez Sprzedawcę.</li>
            <li><strong>Usługa indywidualna</strong> – usługa świadczona przez Sprzedawcę na rzecz Klienta, w szczególności konsultacja, mentoring indywidualny, analiza, audyt, spotkanie online lub inne świadczenie o charakterze edukacyjnym, doradczym, mentoringowym lub rozwojowym.</li>
            <li><strong>Platforma subskrypcyjna</strong> – usługa polegająca na zapewnianiu Klientowi przez określony czas dostępu do zamkniętej przestrzeni online, materiałów, treści, spotkań, społeczności lub innych świadczeń określonych w aktualnej ofercie Platformy, w szczególności platformy Jasny Kierunek Fotografki.</li>
            <li><strong>Subskrypcja</strong> – odpłatny dostęp do Platformy subskrypcyjnej przez okres i na zasadach wskazanych w ofercie obowiązującej w chwili zawarcia umowy.</li>
            <li><strong>Produkt</strong> – Kurs online, Treść cyfrowa, dostęp do Platformy subskrypcyjnej lub inny produkt cyfrowy oferowany przez Sprzedawcę.</li>
            <li><strong>Usługa</strong> – Usługa indywidualna lub inne świadczenie usług oferowane przez Sprzedawcę.</li>
            <li><strong>Strona internetowa</strong> – serwis internetowy Sprzedawcy dostępny pod adresem roksanaglowinska.pl.</li>
            <li><strong>Sprzedawca</strong> – Roksana Głowińska, prowadząca działalność gospodarczą pod firmą LIRYKA Roksana Głowińska z siedzibą w Rzeszowie, ul. Podwisłocze 27/91, 35-309 Rzeszów, NIP: 8133387864, REGON: 181119350, adres e-mail: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a>.</li>
            <li><strong>Zamówienie</strong> – oświadczenie woli Klienta zmierzające bezpośrednio do zawarcia umowy ze Sprzedawcą, składane za pośrednictwem systemu sprzedażowego, koszyka zakupowego lub w inny sposób uzgodniony ze Sprzedawcą.</li>
            <li><strong>Regulamin</strong> – niniejszy Regulamin sprzedaży i świadczenia usług roksanaglowinska.pl.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 3. ZASADY ZAWIERANIA I REALIZACJI UMÓW
          </h2>
          <p>Informacje dotyczące Produktów i Usług prezentowane na Stronie internetowej lub w systemie sprzedażowym zawierają w szczególności opis ich najważniejszych cech, zakres świadczenia oraz cenę.</p>
          <p>W zależności od rodzaju Produktu lub Usługi w ofercie mogą zostać określone również w szczególności: czas dostępu, termin rozpoczęcia realizacji, harmonogram, forma świadczenia, okres obowiązywania umowy, zasady Subskrypcji, wymagania techniczne oraz inne warunki dotyczące konkretnego Produktu lub Usługi.</p>
          <p>Zamówienie może być składane za pośrednictwem zewnętrznego systemu sprzedażowego lub koszyka zakupowego, do którego Klient może zostać przekierowany ze Strony internetowej.</p>
          <p>Przed złożeniem Zamówienia Klient otrzymuje możliwość zapoznania się z najważniejszymi informacjami dotyczącymi wybranego Produktu lub Usługi, ceną oraz niniejszym Regulaminem.</p>
          <p>Umowa zostaje zawarta w momencie potwierdzenia przez Sprzedawcę przyjęcia Zamówienia, chyba że z charakteru procesu sprzedażowego lub informacji przekazanych Klientowi wynika inny moment zawarcia umowy.</p>
          <p>Potwierdzenie Zamówienia oraz informacje dotyczące jego realizacji mogą zostać przesłane na adres e-mail podany przez Klienta.</p>
          <p>Cena Produktu lub Usługi podawana jest w złotych polskich i zawiera należne podatki, chyba że wyraźnie wskazano inaczej.</p>
          <p>Klient przed złożeniem Zamówienia jest informowany o całkowitej cenie Produktu lub Usługi oraz innych należnościach związanych z zawieraną umową.</p>
          <p>Dokument sprzedaży wystawiany jest zgodnie z obowiązującymi przepisami prawa. Jeżeli Klient chce otrzymać fakturę na firmę, powinien podać dane niezbędne do jej wystawienia, w szczególności nazwę firmy, adres oraz numer NIP.</p>
          <p>Faktura może zostać przekazana Klientowi w formie elektronicznej na podany adres e-mail.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 4. PŁATNOŚCI
          </h2>
          <p>Dostępne sposoby płatności są każdorazowo wskazywane Klientowi w systemie sprzedażowym przed złożeniem Zamówienia.</p>
          <p>W zależności od aktualnie dostępnych rozwiązań Sprzedawca może umożliwiać płatność w szczególności przelewem elektronicznym, kartą płatniczą, BLIK-iem, płatnością odroczoną lub za pośrednictwem operatora płatności.</p>
          <p>W przypadku płatności obsługiwanych przez zewnętrznego operatora płatności Klient może zostać przekierowany do systemu tego operatora.</p>
          <p>Jeżeli dla określonego Produktu lub Usługi dostępna jest płatność w ratach, szczegółowe zasady, liczba rat i ich wysokość są przedstawiane Klientowi przed zawarciem umowy.</p>
          <p>Brak zapłaty w wymaganym terminie może skutkować niewykonaniem Zamówienia, wstrzymaniem realizacji świadczenia lub dostępu do Produktu – z uwzględnieniem obowiązujących przepisów prawa oraz warunków konkretnej umowy.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 5. KURSY ONLINE I TREŚCI CYFROWE
          </h2>
          <p>Sprzedawca oferuje Kursy online oraz Treści cyfrowe, w szczególności e-booki, workbooki, nagrania, materiały szkoleniowe oraz inne produkty elektroniczne.</p>
          <p>Szczegółowy zakres Produktu, jego program lub zawartość, czas dostępu, sposób dostarczenia, wymagania techniczne, cena oraz ewentualne ograniczenia korzystania są wskazywane w opisie konkretnego Produktu.</p>
          <p>Dostęp do Kursu online lub Treści cyfrowej może zostać udzielony po zaksięgowaniu płatności albo pozytywnej autoryzacji płatności, chyba że opis konkretnego Produktu stanowi inaczej.</p>
          <p>W przypadku Produktu udostępnianego na platformie edukacyjnej Klient otrzymuje informacje umożliwiające uzyskanie dostępu na adres e-mail podany podczas zakupu albo w inny wskazany sposób.</p>
          <p>Klient zobowiązany jest korzystać z Kursów online i Treści cyfrowych wyłącznie na własny użytek, chyba że oferta wyraźnie stanowi inaczej.</p>
          <p>Klient nie może udostępniać osobom trzecim danych dostępowych do Kursów online, platform ani innych płatnych materiałów.</p>
          <p>Materiały udostępniane w ramach Kursów online i Treści cyfrowych są chronione prawem autorskim.</p>
          <p>Bez uprzedniej zgody Sprzedawcy zabronione jest w szczególności kopiowanie, powielanie, publikowanie, rozpowszechnianie, odsprzedaż, nagrywanie, przekazywanie osobom trzecim lub komercyjne wykorzystywanie materiałów, z wyjątkiem przypadków dozwolonych przez bezwzględnie obowiązujące przepisy prawa.</p>
          <p>Dostęp do Kursu online może zostać udzielony na czas określony albo nieokreślony. Informacja o okresie dostępu jest każdorazowo wskazywana w ofercie danego Kursu.</p>
          <p>Jeżeli Treść cyfrowa ma zostać dostarczona przed upływem ustawowego terminu odstąpienia od umowy, zastosowanie mają zasady określone w § 9 Regulaminu.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 6. USŁUGI INDYWIDUALNE – KONSULTACJE I MENTORING
          </h2>
          <p>Sprzedawca może świadczyć Usługi indywidualne, w szczególności konsultacje oraz mentoring.</p>
          <p>Szczegółowy zakres Usługi, jej czas trwania, liczba spotkań, forma realizacji, cena, harmonogram oraz inne istotne warunki określa oferta konkretnej Usługi lub indywidualne ustalenia pomiędzy Sprzedawcą a Klientem.</p>
          <p>Usługi mogą być świadczone online za pomocą narzędzia wskazanego przez Sprzedawcę.</p>
          <p>Informacje organizacyjne oraz link do spotkania mogą zostać przesłane Klientowi na adres e-mail podany przy składaniu Zamówienia lub przekazane w inny uzgodniony sposób.</p>
          <p>W przypadku mentoringu obejmującego więcej niż jedno spotkanie szczegółowy harmonogram może być ustalany indywidualnie pomiędzy Sprzedawcą a Klientem.</p>
          <p>Klient zobowiązany jest stawić się na umówione spotkanie w uzgodnionym terminie.</p>
          <p>Zasady dotyczące możliwości przełożenia lub odwołania konkretnego spotkania mogą być określone w ofercie danej Usługi lub indywidualnych ustaleniach ze Sprzedawcą.</p>
          <p>Usługi świadczone przez Sprzedawcę mają charakter edukacyjny, mentoringowy, konsultacyjny lub rozwojowy. Sprzedawca nie gwarantuje osiągnięcia przez Klienta określonego wyniku biznesowego, finansowego, sprzedażowego lub zawodowego. Efekty zależą również od indywidualnej sytuacji Klienta, podejmowanych przez niego decyzji oraz sposobu wdrażania zdobytej wiedzy.</p>
          <p>Jeżeli świadczenie Usługi ma rozpocząć się przed upływem ustawowego terminu odstąpienia od umowy, zastosowanie mają zasady określone w § 9 Regulaminu.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 7. PLATFORMA SUBSKRYPCYJNA JASNY KIERUNEK FOTOGRAFKI
          </h2>
          <p>Sprzedawca oferuje dostęp do Platformy subskrypcyjnej Jasny Kierunek Fotografki.</p>
          <p>Platforma stanowi zamkniętą przestrzeń online, w ramach której Klient może otrzymywać dostęp do treści, materiałów, spotkań, społeczności, planów działania, wyzwań lub innych elementów wskazanych w aktualnej ofercie.</p>
          <p>Szczegółowy zakres świadczeń dostępnych w ramach Platformy, cena, okres rozliczeniowy, czas trwania Subskrypcji, ewentualny minimalny okres zobowiązania oraz zasady płatności są wskazywane w ofercie obowiązującej w chwili zawarcia umowy.</p>
          <p>Dostęp do Platformy jest przeznaczony wyłącznie dla osoby, która nabyła Subskrypcję. Klient nie może udostępniać osobom trzecim swojego konta, danych logowania ani płatnych materiałów znajdujących się na Platformie.</p>
          <p>Jeżeli Subskrypcja przewiduje płatności cykliczne, opłata jest pobierana za kolejne okresy rozliczeniowe zgodnie z warunkami zaakceptowanymi przez Klienta przy zakupie.</p>
          <p>Jeżeli umowa została zawarta na czas nieokreślony z cyklicznym okresem rozliczeniowym, Klient może zrezygnować z jej dalszego trwania na zasadach wskazanych przy zakupie. Rezygnacja wywołuje skutek na przyszłość i nie powoduje zwrotu należnie pobranej opłaty za rozpoczęty okres rozliczeniowy, chyba że bezwzględnie obowiązujące przepisy prawa stanowią inaczej.</p>
          <p>Jeżeli oferta przewiduje minimalny okres trwania Subskrypcji, informacja o nim jest przekazywana Klientowi przed zawarciem umowy. Po upływie tego okresu dalsze zasady obowiązywania Subskrypcji wynikają z warunków oferty zaakceptowanych przy zakupie.</p>
          <p>W przypadku rezygnacji skutecznej na koniec danego okresu rozliczeniowego Klient zachowuje dostęp do Platformy do końca opłaconego okresu, chyba że oferta stanowi inaczej lub przepisy prawa wymagają odmiennego rozwiązania.</p>
          <p>Brak możliwości pobrania kolejnej należnej opłaty może skutkować wstrzymaniem lub zakończeniem dostępu do Platformy po bezskutecznym upływie terminu na dokonanie płatności, z uwzględnieniem obowiązujących przepisów prawa.</p>
          <p>Sprzedawca może rozwijać Platformę, aktualizować materiały, zmieniać sposób ich prezentacji oraz dodawać nowe elementy, o ile nie prowadzi to do niedozwolonej jednostronnej zmiany istotnych warunków zawartej z Konsumentem umowy.</p>
          <p>Zmiana ceny Subskrypcji nie powoduje automatycznego obciążenia Konsumenta nową ceną bez podstawy wynikającej z obowiązujących przepisów oraz warunków zawartej umowy. Jeżeli dla dalszego korzystania z Platformy na nowych warunkach wymagana jest zgoda Konsumenta, dalsze świadczenie odbywa się po jej uzyskaniu.</p>
          <p>Materiały udostępniane w ramach Platformy są chronione prawem autorskim i mogą być wykorzystywane wyłącznie na własny użytek Klienta.</p>
          <p>Zakończenie Subskrypcji powoduje utratę dostępu do Platformy oraz materiałów dostępnych wyłącznie w ramach aktywnej Subskrypcji, chyba że oferta konkretnego świadczenia stanowi inaczej.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 8. WYMAGANIA TECHNICZNE
          </h2>
          <p>Do korzystania ze Strony internetowej, Produktów cyfrowych, Kursów online oraz Platformy niezbędne są co najmniej:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>urządzenie posiadające dostęp do Internetu;</li>
            <li>aktualna przeglądarka internetowa;</li>
            <li>aktywny adres poczty elektronicznej;</li>
            <li>możliwość odtwarzania standardowych formatów plików i materiałów multimedialnych – jeżeli wymaga tego charakter danego Produktu.</li>
          </ul>
          <p>Korzystanie z niektórych Produktów lub Usług może wymagać założenia konta na zewnętrznej platformie lub korzystania z określonego narzędzia internetowego. Informacja o takim wymaganiu jest przekazywana Klientowi przed rozpoczęciem korzystania z danego świadczenia lub w jego opisie.</p>
          <p>Klient powinien stosować aktualne oprogramowanie i odpowiednie zabezpieczenia swojego urządzenia oraz chronić dane logowania przed dostępem osób trzecich.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 9. PRAWO ODSTĄPIENIA OD UMOWY
          </h2>
          <p>Konsument, który zawarł ze Sprzedawcą umowę na odległość, może co do zasady odstąpić od niej bez podania przyczyny w terminie 14 dni od dnia zawarcia umowy, z zastrzeżeniem wyjątków przewidzianych obowiązującymi przepisami prawa oraz niniejszym Regulaminem.</p>
          <p>Konsument może odstąpić od umowy, przesyłając jednoznaczne oświadczenie:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>w formie elektronicznej na adres: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a> albo</li>
            <li>pisemnie na adres: ul. Podwisłocze 27/91, 35-309 Rzeszów.</li>
          </ul>
          <p>Konsument może skorzystać z ustawowego wzoru formularza odstąpienia od umowy, jednak nie jest to obowiązkowe.</p>
          <p>Do zachowania terminu wystarczy wysłanie oświadczenia o odstąpieniu przed jego upływem.</p>
          <p>W przypadku skutecznego odstąpienia od umowy Sprzedawca zwraca Konsumentowi należne płatności niezwłocznie, nie później niż w terminie 14 dni od dnia otrzymania oświadczenia o odstąpieniu, z uwzględnieniem wyjątków i zasad wynikających z obowiązujących przepisów prawa.</p>
          <p>Zwrot płatności następuje przy użyciu takiego samego sposobu płatności, jakiego użył Konsument, chyba że Konsument wyraźnie zgodził się na inny sposób niewiążący się dla niego z dodatkowymi kosztami.</p>
          
          <h3 className="font-bold mt-8 mb-2">Treści cyfrowe</h3>
          <p>W przypadku odpłatnych Treści cyfrowych niedostarczanych na nośniku materialnym, w szczególności e-booków, workbooków, nagrań, plików elektronicznych oraz materiałów stanowiących Treści cyfrowe, Konsument może utracić prawo odstąpienia od umowy po rozpoczęciu dostarczania Treści cyfrowej, jeżeli zostały spełnione wszystkie warunki wymagane obowiązującymi przepisami prawa, w szczególności:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Konsument wyraził uprzednią i wyraźną zgodę na rozpoczęcie dostarczania Treści cyfrowej przed upływem terminu do odstąpienia od umowy;</li>
            <li>został poinformowany, że rozpoczęcie świadczenia na powyższych zasadach spowoduje utratę prawa odstąpienia od umowy i przyjął to do wiadomości;</li>
            <li>Sprzedawca przekazał Konsumentowi wymagane prawem potwierdzenie zawarcia umowy i udzielonej zgody na trwałym nośniku.</li>
          </ul>
          <p>Jeżeli wymagane prawem warunki utraty prawa odstąpienia nie zostały spełnione, uprawnienia Konsumenta określają obowiązujące przepisy prawa.</p>
          
          <h3 className="font-bold mt-8 mb-2">Usługi</h3>
          <p>Jeżeli Konsument chce, aby świadczenie Usługi, w szczególności konsultacji lub mentoringu, rozpoczęło się przed upływem 14-dniowego terminu do odstąpienia od umowy, Sprzedawca może wymagać wyraźnego żądania rozpoczęcia świadczenia przed upływem tego terminu.</p>
          <p>Jeżeli Konsument odstąpi od umowy po zgłoszeniu żądania rozpoczęcia świadczenia przed upływem terminu do odstąpienia, lecz zanim Usługa zostanie w pełni wykonana, Konsument może być zobowiązany do zapłaty kwoty proporcjonalnej do zakresu świadczenia spełnionego do chwili odstąpienia – zgodnie z obowiązującymi przepisami prawa.</p>
          <p>Konsument traci prawo odstąpienia od umowy o świadczenie Usługi po jej pełnym wykonaniu, jeżeli świadczenie rozpoczęło się za uprzednią i wyraźną zgodą Konsumenta, a przed rozpoczęciem świadczenia Konsument został poinformowany, że po pełnym wykonaniu Usługi utraci prawo odstąpienia od umowy, i przyjął to do wiadomości.</p>
          <p>Jeżeli Konsument nie zażąda rozpoczęcia świadczenia Usługi przed upływem terminu do odstąpienia od umowy, Sprzedawca może rozpocząć świadczenie po upływie tego terminu.</p>
          <p>Postanowienia dotyczące odstąpienia od umowy nie ograniczają prawa Konsumenta do złożenia reklamacji w przypadku niezgodności Produktu, Treści cyfrowej, usługi cyfrowej lub Usługi z umową.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 10. REKLAMACJE
          </h2>
          <p>Sprzedawca ponosi wobec Konsumenta odpowiedzialność za zgodność Produktów, Treści cyfrowych, usług cyfrowych i świadczonych Usług z umową na zasadach określonych w obowiązujących przepisach prawa.</p>
          <p>Reklamację można złożyć:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>w formie elektronicznej na adres: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a>;</li>
            <li>pisemnie na adres: ul. Podwisłocze 27/91, 35-309 Rzeszów.</li>
          </ul>
          <p>W celu usprawnienia rozpatrzenia reklamacji zaleca się podanie danych umożliwiających identyfikację Klienta i Zamówienia oraz opisanie problemu lub stwierdzonej niezgodności i oczekiwanego sposobu rozwiązania sprawy.</p>
          <p>W przypadku problemu technicznego dotyczącego Kursu online, Treści cyfrowej lub Platformy pomocne może być również wskazanie urządzenia, systemu operacyjnego, przeglądarki oraz okoliczności wystąpienia problemu.</p>
          <p>Brak informacji, o których mowa powyżej, nie wpływa na skuteczność reklamacji, jeżeli na podstawie przekazanych danych możliwe jest jej rozpatrzenie.</p>
          <p>Sprzedawca ustosunkuje się do reklamacji Konsumenta w terminie wymaganym obowiązującymi przepisami prawa, co do zasady nie później niż w terminie 14 dni od dnia jej otrzymania.</p>
          <p>W odniesieniu do Treści cyfrowych i usług cyfrowych Konsumentowi przysługują uprawnienia wynikające z przepisów ustawy o prawach konsumenta dotyczących zgodności treści cyfrowej lub usługi cyfrowej z umową.</p>
          <p>Postanowienia niniejszego paragrafu nie wyłączają ani nie ograniczają praw Konsumenta wynikających z bezwzględnie obowiązujących przepisów prawa.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 11. PRAWA AUTORSKIE
          </h2>
          <p>Treści udostępniane przez Sprzedawcę w ramach Kursów online, Treści cyfrowych, mentoringów, konsultacji, Platformy oraz innych Produktów i Usług mogą stanowić utwory chronione prawem autorskim.</p>
          <p>Zakup Produktu, Usługi lub Subskrypcji nie powoduje przeniesienia na Klienta autorskich praw majątkowych do udostępnianych materiałów.</p>
          <p>Klient otrzymuje prawo korzystania z materiałów na własny użytek w zakresie wynikającym z charakteru zakupionego Produktu lub Usługi.</p>
          <p>Bez uprzedniej zgody Sprzedawcy zabronione jest w szczególności:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>kopiowanie i rozpowszechnianie materiałów;</li>
            <li>przekazywanie materiałów lub danych dostępowych osobom trzecim;</li>
            <li>publikowanie materiałów w Internecie lub innych miejscach;</li>
            <li>odsprzedaż materiałów;</li>
            <li>wykorzystywanie materiałów w całości lub części do tworzenia własnych odpłatnych produktów, kursów, szkoleń lub innych materiałów;</li>
            <li>nagrywanie i rozpowszechnianie spotkań, materiałów wideo lub transmisji – chyba że Sprzedawca wyraził na to zgodę.</li>
          </ul>
          <p>Powyższe ograniczenia stosuje się z poszanowaniem przypadków dozwolonego użytku wynikających z obowiązujących przepisów prawa.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 12. FOCUSLETTER / NEWSLETTER
          </h2>
          <p>Użytkownik może dobrowolnie zapisać się do Focuslettera/newslettera prowadzonego przez Sprzedawcę.</p>
          <p>Usługa polega na okresowym przesyłaniu na podany adres e-mail treści informacyjnych, edukacyjnych, promocyjnych i marketingowych związanych z działalnością Roksany Głowińskiej oraz jej ofertą.</p>
          <p>Subskrypcja Focuslettera/newslettera jest dobrowolna.</p>
          <p>Użytkownik może zrezygnować z otrzymywania Focuslettera/newslettera w każdym czasie, w szczególności poprzez kliknięcie linku rezygnacji znajdującego się w wiadomości e-mail lub poprzez kontakt ze Sprzedawcą.</p>
          <p>Szczegółowe informacje dotyczące przetwarzania danych osobowych znajdują się w Polityce Prywatności dostępnej na Stronie internetowej.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 13. DANE OSOBOWE
          </h2>
          <p>Administratorem danych osobowych Klientów jest Roksana Głowińska, prowadząca działalność gospodarczą pod firmą LIRYKA Roksana Głowińska z siedzibą w Rzeszowie, ul. Podwisłocze 27/91, 35-309 Rzeszów, NIP: 8133387864, REGON: 181119350.</p>
          <p>Dane osobowe są przetwarzane w szczególności w celu zawierania i wykonywania umów, realizacji Zamówień, świadczenia Usług oraz wykonywania obowiązków wynikających z przepisów prawa.</p>
          <p>Szczegółowe zasady przetwarzania danych osobowych, informacje o prawach osób, których dane dotyczą, oraz informacje dotyczące plików cookies znajdują się w Polityce Prywatności dostępnej na Stronie internetowej.</p>
          <p>Kontakt w sprawach dotyczących danych osobowych możliwy jest pod adresem: <a href="mailto:hello@roksanaglowinska.pl" className="underline hover:text-neutral-600 transition-colors">hello@roksanaglowinska.pl</a>.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 14. POZASĄDOWE SPOSOBY ROZPATRYWANIA SPORÓW
          </h2>
          <p>Konsument może korzystać z pozasądowych sposobów rozpatrywania reklamacji i dochodzenia roszczeń dostępnych na podstawie obowiązujących przepisów prawa.</p>
          <p>Konsument może w szczególności zwrócić się o pomoc do właściwego miejskiego lub powiatowego rzecznika konsumentów albo skorzystać z dostępnych procedur pozasądowego rozwiązywania sporów konsumenckich.</p>
          <p>Skorzystanie z pozasądowych sposobów rozwiązywania sporów ma charakter dobrowolny i nie pozbawia Konsumenta prawa do dochodzenia roszczeń przed sądem.</p>

          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight mt-12 mb-4">
            § 15. POSTANOWIENIA KOŃCOWE
          </h2>
          <p>Sprzedawca może zmienić Regulamin z ważnych przyczyn, w szczególności w przypadku:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>zmiany obowiązujących przepisów prawa mających wpływ na treść Regulaminu;</li>
            <li>konieczności dostosowania Regulaminu do decyzji, zaleceń, orzeczeń lub wytycznych właściwych organów;</li>
            <li>zmiany lub rozbudowy funkcjonalności Strony internetowej, systemów sprzedażowych, platform edukacyjnych lub Platformy subskrypcyjnej;</li>
            <li>wprowadzenia nowych Produktów lub Usług;</li>
            <li>zmiany warunków technicznych świadczenia usług;</li>
            <li>konieczności usunięcia niejasności, błędów lub omyłek;</li>
            <li>zmiany danych Sprzedawcy;</li>
            <li>konieczności przeciwdziałania nadużyciom lub zwiększenia bezpieczeństwa.</li>
          </ul>
          <p>Zmiana Regulaminu nie narusza praw nabytych Klientów ani warunków umów zawartych przed wejściem zmiany w życie, chyba że możliwość zmiany konkretnej trwającej umowy wynika z obowiązujących przepisów prawa i została dokonana zgodnie z nimi.</p>
          <p>W przypadku trwających umów, w szczególności Subskrypcji, zmiany warunków umowy dokonywane są z uwzględnieniem obowiązujących przepisów dotyczących ochrony Konsumentów.</p>
          <p>Aktualna wersja Regulaminu jest dostępna na Stronie internetowej.</p>
          <p>Wszelkie spory pomiędzy Sprzedawcą a Klientem niebędącym Konsumentem będą rozstrzygane przez sąd powszechny właściwy dla siedziby Sprzedawcy, o ile obowiązujące przepisy prawa dopuszczają takie ustalenie.</p>
          <p>W odniesieniu do Konsumentów właściwość sądu ustalana jest zgodnie z obowiązującymi przepisami prawa.</p>
          <p>Jeżeli którekolwiek z postanowień Regulaminu okaże się nieważne lub bezskuteczne, nie wpływa to na ważność pozostałych postanowień Regulaminu.</p>
          <p>W sprawach nieuregulowanych w Regulaminie zastosowanie mają obowiązujące przepisy prawa polskiego, w szczególności Kodeks cywilny oraz ustawa z dnia 30 maja 2014 r. o prawach konsumenta.</p>
          <p>Niniejszy Regulamin obowiązuje od dnia 29.09.2026 r.</p>
        </div>
      </section>
    </main>
  );
}
