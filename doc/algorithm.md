## Algorytm

Skrócony opis algorytmu generowania menu.

#### Założenia

* Długość podróży jest konfigurowalna (w dniach)
* Liczba podróżnych jest konfigurowalna (wg. postaci)
* Każda postać ma dokładnie określone zapotrzebowanie kaloryczne
* Każda postać posiada ulubione potrawy, które musi zjeść każdego dnia
* Dwa kolejne menu dla danej postaci muszą być od siebie różne
* W pierwszej kolejności do menu dobierane są potrawy o najwyższej kaloryczności (w stosunku do wagi)

#### Kroki

1. Pobieramy listę potraw 
   1. Pobieramy listę potraw z API 
   2. Pobieramy listę składników z API
   3. Łączymy potrawy z odpowiadającymi im składnikami
   4. Obliczamy wagę potraw na podstawie wagi ich składników
   5. Sortujemy potrawy w kolejności od najwyższej kaloryczności (w stosunku do wagi)
2. Pobieramy listę postaci
   1. Pobieramy listę postaci z API
3. W zależności od długości podróży generujemy menu na każdy dzień
   1. Dla każdej postaci generujemy dedykowane dla niej menu
      1. Dzielimy dostępne potrawy na ulubione przez daną postać oraz pozostałe
      2. Ulubione potrawy dodajemy do menu, zapewniając, że będą dostępne każdego dnia
      3. Z pozostałych potraw wybieramy potrawy dostępne do wygenerowania menu na dany dzień
         1. Z listy potraw usuwamy "Danię dnia" z poprzedniego dnia (jeżeli zostało ustalone)
         2. Z listy potraw losujemy "Danię dnia", zapewniając różnorodność menu
         3. Przesuwamy "Danię dnia" na początek listy potraw (kryterium różnorodności ma wyższy priorytet niż kryterium optymalnej wagi)
      4. Obliczamy pozostałe kalorie odejmując od zapotrzebowania kalorycznego sumę kalorii ulubionych potraw
      5. Wybieramy potrawy potrzebne do osiągnięcia wymaganego zapotrzebowania kalorycznego
         1. W pierwszej kolejności wybieramy "Danię dnia"
         2. Pozostałe dania dobieramy wg. ich kaloryczności
      6. Dodajemy wybrane potrawy do menu
      7. Zapamiętujemy "Danię dnia", aby wykluczyć je w kolejnym dniu
   2. Dodajemy menu dedykowane dla danej postaci do menu dnia
4. Dodajemy menu dnia do całego menu

#### Uwaga

Wygenerowane menu zawiera menu dla pojedynczej postaci każdego typu,  
aby umożliwić modyfikowanie liczby podróżnych po wygenerowaniu menu.

Menu prezentowane jest w dwóch wariantach:
* szczegółowym, gdzie widoczne jest menu z podziałem na typ postaci
* ogólnym, gdzie widoczne jest skumulowane menu wszystkich postaci

