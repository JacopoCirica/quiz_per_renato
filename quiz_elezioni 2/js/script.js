
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".partiti");
const restart_quiz=document.querySelector(".restart_box")
const inizia_btn = document.querySelector("#Inizia")
const opzione1 = document.querySelector (".didascalia")
const opzione2 = document.querySelector (".didascalia1")
const opzione3 = document.querySelector (".didascalia2")
const opzione4 = document.querySelector (".didascalia3")
const opzione5 = document.querySelector (".didascalia4")
const section_game = document.querySelector("#game")
const corretta= document.querySelector('.risposta_esatta')
const sbagliata=document.querySelector('.risposta_sbagliata')
const loghi = document.querySelectorAll('.dot')
const option_list1=document.querySelectorAll("prova2 > img:not(.dot correct) ")
const testata=document.querySelector('.testata_container')
const overflow=document.querySelector('.container-text')
const continua_a_leggere= document.querySelector(".continua")

const risposta_corretta= document.querySelector(".risposta_esatta")
const score_number=document.querySelector('.score_number')

var risposte_arr=[] //response array for result box
var nome_lista=""
var nome_lista_sbagliata=""
var risposta_text1=""
var descrizione_alternativa=""
const number1=document.querySelector('.primariga')
const number2=document.querySelector('.secondariga')

const text = `[
  {
    "id": "9",
    "domanda": "Adesione alla NATO",
    "descrizione": "L'Organizzazione del Trattato dell'Atlantico del Nord (in inglese: North Atlantic Treaty Organization, in sigla NATO, in francese: Organisation du Trait\u00e9 de l'Atlantique Nord, in sigla OTAN) \u00e8 un'organizzazione internazionale per la collaborazione nel settore della difesa.",
    "risposta_id": "137",
    "risposta_idPartito": "1",
    "risposta_partito": "m5s",
    "risposta_valore": "green",
    "risposta_descrizione": "Solida collocazione dell'Italia nell'Alleanza Atlantica e nell' Unione europea, ma con un atteggiamento proattivo e non fideistico, che renda l\u2019Italia protagonista nell\u2019ambito dei vari consessi.",
    "partiti": [
      {
        "risposta_id": "137",
        "risposta_valore": "green",
        "risposta_descrizione": "Solida collocazione dell'Italia nell'Alleanza Atlantica e nell' Unione europea, ma con un atteggiamento proattivo e non fideistico, che renda l\u2019Italia protagonista nell\u2019ambito dei vari consessi.",
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      },
      {
        "risposta_id": "136",
        "risposta_valore": "green",
        "risposta_descrizione": "Rispetto degli impegni assunti nell'Alleanza Atlantica, anche in merito all'adeguamento degli stanziamenti per la difesa, sostegno all'Ucraina di fronte all'invasione della Federazione Russa e sostegno ad ogni iniziativa diplomatica volta alla soluzione del conflitto.",
        "idPartito": "5",
        "simbolo": "noi_moderati.png",
        "descr_lista": "Noi Moderati\/Lupi - Toti - Brugnaro - UDC",
        "partito": "noim"
      },
      {
        "risposta_id": "143",
        "risposta_valore": "red",
        "risposta_descrizione": "Fuori l'Italia da NATO, UE, euro, Oms.",
        "idPartito": "8",
        "simbolo": "italia_sovrana_popolare.png",
        "descr_lista": "Italia Sovrana E Popolare",
        "partito": "isp"
      },
      {
        "risposta_id": "141",
        "risposta_valore": "green",
        "risposta_descrizione": "Lealt\u00e0 e stretta collaborazione con i tradizionali alleati dell'Italia, Stati Uniti in primis, e al Patto atlantico.",
        "idPartito": "15",
        "simbolo": "mastella.png",
        "descr_lista": "Mastella Noi di Centro Europeisti",
        "partito": "ndceu"
      },
      {
        "risposta_id": "140",
        "risposta_valore": "red",
        "risposta_descrizione": "Operare per il superamento della NATO, per la sovranit\u00e0 nazionale con lo stop ad armi nucleari nel nostro Paese e per sostenere politiche di disarmo a livello globale, opponendosi all\u2019aumento delle spese militari al 2% del PIL ed impegnandosi alla progressiva riduzione delle stesse. Firma immediata del trattato di messa al bando delle armi nucleari. L\u2019Italia dovr\u00e0 essere senza bombe atomiche e promotrice di una conferenza internazionale per il disarmo e la denuclearizzazione dell\u2019Europa. Saremo amici di americani, russi e cinesi, mai pi\u00f9 sudditi e subalterni di nessuno.",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      }
    ]
  },
  {
    "id": "136",
    "domanda": "Connessione ad alta velocit\u00e0",
    "descrizione": null,
    "risposta_id": "2169",
    "risposta_idPartito": "1",
    "risposta_partito": "m5s",
    "risposta_valore": "green",
    "risposta_descrizione": "Riconoscimento dell\u2019accesso alla rete quale diritto costituzionale e copertura nazionale con banda ultralarga",
    "partiti": [
      {
        "risposta_id": "2170",
        "risposta_valore": "green",
        "risposta_descrizione": "Sviluppare infrastrutture digitali di qualit\u00e0 per connettivit\u00e0 diffusa e territori intelligenti Continuare a investire nella copertura delle reti ad altissima capacit\u00e0 (compresa la fibra fino all'utente) e alla copertura 5G.",
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "2175",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "8",
        "simbolo": "italia_sovrana_popolare.png",
        "descr_lista": "Italia Sovrana E Popolare",
        "partito": "isp"
      },
      {
        "risposta_id": "2169",
        "risposta_valore": "green",
        "risposta_descrizione": "Riconoscimento dell\u2019accesso alla rete quale diritto costituzionale e copertura nazionale co banda ultralarga",
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      },
      {
        "risposta_id": "2167",
        "risposta_valore": "yellow",
        "risposta_descrizione": "Disponibilit\u00e0 della banda larga in tutte le localit\u00e0 turistiche.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "2168",
        "risposta_valore": "green",
        "risposta_descrizione": "Sviluppare le dorsali in fibra ottica e sburocratizzare l\u2019ultimo miglio: portare Internet ad altissima velocit\u00e0 anche nei territori pi\u00f9 periferici del Paese permette lo sviluppo delle nuove economie e la diffusione della cultura digitale anche nelle aree meno sviluppate. Noi vogliamo programmare la posa di nuove reti terrestri e sottomarine e semplificare la burocrazia relativa all\u2019\u201dultimo miglio\u201d accelerando la transizione digitale.",
        "idPartito": "5",
        "simbolo": "noi_moderati.png",
        "descr_lista": "Noi Moderati\/Lupi - Toti - Brugnaro - UDC",
        "partito": "noim"
      }
    ]
  },
  {
    "id": "35",
    "domanda": "Abolizione della legge Gelmini ",
    "descrizione": "Come riforma Gelmini si indica comunemente l'insieme degli atti normativi della Repubblica Italiana \u2013 emanati durante il governo Berlusconi IV \u2013 durante la permanenza in carica del Ministro dell'istruzione, dell'universit\u00e0 e della ricerca Mariastella Gelmini, riguardanti il settore dell'istruzione in Italia.",
    "risposta_id": "558",
    "risposta_idPartito": "7",
    "risposta_partito": "italexit",
    "risposta_valore": "green",
    "risposta_descrizione": "Riteniamo, pertanto, indispensabile rivedere gli aspetti normativi delle riforme scolastiche: Berlinguer, Moratti, Gelmini e legge107 di Renzi, che hanno impresso una dimensione aziendalistica e dirigistica, determinando la diffusione di una cultura solipsistica e sempre pi\u00f9 performativa, con la progressiva disumanizzazione degli operatori dell\u2019istruzione e dei loro stessi utenti finali. ",
    "partiti": [
      {
        "risposta_id": "555",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      },
      {
        "risposta_id": "552",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "5",
        "simbolo": "noi_moderati.png",
        "descr_lista": "Noi Moderati\/Lupi - Toti - Brugnaro - UDC",
        "partito": "noim"
      },
      {
        "risposta_id": "551",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "556",
        "risposta_valore": "green",
        "risposta_descrizione": "Abolizione della riforma della \u201cBuona scuola\u201d di Renzi e della riforma Gelmini. Apertura di un processo di riforma di scuola e universit\u00e0 che coinvolga attivamente le organizzazioni degli studenti, dei docenti, del personale Ata e dei genitori. Questa dovr\u00e0 prevedere anche la rimodulazione dei contenuti e dei programmi nella direzione di un pieno sviluppo della personalit\u00e0 di alunni e studenti. Adeguamento degli stipendi dei docenti alla media europea.",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "558",
        "risposta_valore": "green",
        "risposta_descrizione": "Riteniamo, pertanto, indispensabile rivedere gli aspetti normativi delle riforme scolastiche: Berlinguer, Moratti, Gelmini e legge107 di Renzi, che hanno impresso una dimensione aziendalistica e dirigistica, determinando la diffusione di una cultura solipsistica e sempre pi\u00f9 performativa, con la progressiva disumanizzazione degli operatori dell\u2019istruzione e dei loro stessi utenti finali. ",
        "idPartito": "7",
        "simbolo": "italexit_paragone.png",
        "descr_lista": "Italexit per L'italia",
        "partito": "italexit"
      }
    ]
  },
  {
    "id": "4",
    "domanda": "Riduzione dell'IVA",
    "descrizione": "L'imposta sul valore aggiunto, in acronimo IVA, \u00e8 un'imposta \u2013 adottata nel 1968 da numerosi Paesi del mondo (tra i quali anche i membri dell'UE) \u2013 applicata sul valore aggiunto di ogni fase della produzione, di scambio di beni e servizi.",
    "risposta_id": "55",
    "risposta_idPartito": "4",
    "risposta_partito": "fi",
    "risposta_valore": "green",
    "risposta_descrizione": "Azzeramento dell\u2019IVA sui prodotti di prima necessit\u00e0, quali pane, pasta e latte.",
    "partiti": [
      {
        "risposta_id": "55",
        "risposta_valore": "green",
        "risposta_descrizione": "Azzeramento dell\u2019IVA sui prodotti di prima necessit\u00e0, quali pane, pasta e latte.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "58",
        "risposta_valore": "green",
        "risposta_descrizione": "Passaggio ad un sistema a due aliquote (una ridotta e una ordinaria) e contestuale riordino dei beni e servizi assoggettati a ciascuna aliquota e ad aliquota zero.",
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "64",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "13",
        "simbolo": "vita.png",
        "descr_lista": "Vita",
        "partito": "vita"
      },
      {
        "risposta_id": "50",
        "risposta_valore": "green",
        "risposta_descrizione": "Riduzione dell\u2019aliquota IVA su cibo per animali e prestazioni veterinarie, oggi soggetti a tassazione come \u201cbeni di lusso\u201d, che aggrava le condizioni di difficolt\u00e0 economica di chi ha accolto in casa degli animali come parte della famiglia",
        "idPartito": "11",
        "simbolo": "alleanza_verdi_sinistra.png",
        "descr_lista": "Alleanza Verdi e Sinistra",
        "partito": "avs"
      },
      {
        "risposta_id": "54",
        "risposta_valore": "green",
        "risposta_descrizione": "Riduzione dell\u2019aliquota Iva sui prodotti per la prima infanzia quali pannolini, biberon, latte artificiale e altri. Sterilizzazione delle entrate dello Stato da imposte su energia e carburanti e automatica riduzione di Iva e accise. Ampliamento della platea dei beni con Iva ridotta, in particolare con riferimento al carrello della spesa e ai prodotti per l\u2019infanzia.",
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      }
    ]
  },
  {
    "id": "101",
    "domanda": "Sostegno alle imprese turistiche",
    "descrizione": null,
    "risposta_id": "1610",
    "risposta_idPartito": "2",
    "risposta_partito": "aziv",
    "risposta_valore": "green",
    "risposta_descrizione": "Ridurre la pressione fiscale in capo alle imprese del settore turistico.",
    "partiti": [
      {
        "risposta_id": "1612",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "1616",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "13",
        "simbolo": "vita.png",
        "descr_lista": "Vita",
        "partito": "vita"
      },
      {
        "risposta_id": "1615",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "8",
        "simbolo": "italia_sovrana_popolare.png",
        "descr_lista": "Italia Sovrana E Popolare",
        "partito": "isp"
      },
      {
        "risposta_id": "1610",
        "risposta_valore": "green",
        "risposta_descrizione": "Ridurre la pressione fiscale in capo alle imprese del settore turistico.",
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "1606",
        "risposta_valore": "green",
        "risposta_descrizione": "Fratelli d\u2019Italia ha l\u2019obiettivo di sviluppare il sistema turistico italiano rigenerando tutte quelle risorse che prima erano degradate o mal utilizzate, incrementando l\u2019artigianato, l\u2019industria creativa , l\u2019innovazione ma soprattutto dando ai territori una guida sicura e efficace dove poter ricevere risposte.",
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      }
    ]
  },
  {
    "id": "10",
    "domanda": "Sanzioni contro la Russia",
    "descrizione": "Le sanzioni internazionali durante la crisi in Ucraina furono intraprese da numerosi Stati contro la Russia, a seguito dell'intervento militare russo in Ucraina cominciato alla fine di febbraio 2014. Le sanzioni furono imposte da Stati Uniti, Unione europea e altri Stati e organizzazioni internazionali contro singoli individui, tra cui imprenditori e funzionari russi e ucraini. La Russia ha risposto con sanzioni contro alcuni paesi, bandendo l'importazione di cibo da Unione europea, Stati Uniti, Norvegia, Canada e Australia.",
    "risposta_id": "153",
    "risposta_idPartito": "1",
    "risposta_partito": "m5s",
    "risposta_valore": "green",
    "risposta_descrizione": "Abbiamo, invece, sempre sostenuto con forza le sanzioni e, oltre a volerle rendere pi\u00f9 efficaci contro la Russia, vanno rese pi\u00f9 sostenibili con l'Energy Recovery Fund.",
    "partiti": [
      {
        "risposta_id": "155",
        "risposta_valore": "red",
        "risposta_descrizione": "Rimuovere le sanzioni alle nostre aziende per l'export con la Russia.",
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      },
      {
        "risposta_id": "153",
        "risposta_valore": "green",
        "risposta_descrizione": "Abbiamo, invece, sempre sostenuto con forza le sanzioni e, oltre a volerle rendere pi\u00f9 efficaci contro la Russia, vanno rese pi\u00f9 sostenibili con l'Energy Recovery Fund.",
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      },
      {
        "risposta_id": "145",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "10",
        "simbolo": "pd.png",
        "descr_lista": "Partito Democratico - Italia Democratica e Progressista",
        "partito": "pd"
      },
      {
        "risposta_id": null,
        "risposta_valore": null,
        "risposta_descrizione": null,
        "idPartito": "9",
        "simbolo": "europa_bonino.png",
        "descr_lista": "+Europa",
        "partito": "+e"
      },
      {
        "risposta_id": "151",
        "risposta_valore": "green",
        "risposta_descrizione": "Sulle sanzioni alla Russia, sono in perfetta linea con il Governo, con l\u2019Unione Europea e con l\u2019intero Occidente.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      }
    ]
  },
  {
    "id": "129",
    "domanda": "Responsabilit\u00e0 civile dei magistrati",
    "descrizione": "I magistrati rispondono penalmente, civilmente e disciplinarmente delle azioni da loro commesse a danno dei cittadini nell'esercizio delle loro funzioni. Il principio della responsabilit\u00e0 civile dei magistrati ha il suo fondamento nell'art. 28 della Costituzione, secondo cui i funzionari e i dipendenti dello Stato e degli enti pubblici sono direttamente responsabili, secondo le leggi penali, civili e amministrative, degli atti compiuti in violazione di diritti. In tali casi da essa si estende allo Stato e agli enti pubblici.",
    "risposta_id": "2053",
    "risposta_idPartito": "6",
    "risposta_partito": "lega",
    "risposta_valore": "green",
    "risposta_descrizione": "\u00c8 necessario assicurare l\u2019effettiva responsabilit\u00e0 del magistrato per errori commessi nell\u2019esercizio della funzione.",
    "partiti": [
      {
        "risposta_id": "2053",
        "risposta_valore": "green",
        "risposta_descrizione": "\u00c8 necessario assicurare l\u2019effettiva responsabilit\u00e0 del magistrato per errori commessi nell\u2019esercizio della funzione.",
        "idPartito": "6",
        "simbolo": "lega_salvini.png",
        "descr_lista": "Lega per Salvini Premier",
        "partito": "lega"
      },
      {
        "risposta_id": "2059",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      },
      {
        "risposta_id": "2050",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "11",
        "simbolo": "alleanza_verdi_sinistra.png",
        "descr_lista": "Alleanza Verdi e Sinistra",
        "partito": "avs"
      },
      {
        "risposta_id": "2056",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "5",
        "simbolo": "noi_moderati.png",
        "descr_lista": "Noi Moderati\/Lupi - Toti - Brugnaro - UDC",
        "partito": "noim"
      },
      {
        "risposta_id": "2064",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "13",
        "simbolo": "vita.png",
        "descr_lista": "Vita",
        "partito": "vita"
      }
    ]
  },
  {
    "id": "126",
    "domanda": "Riforma della custodia cautelare",
    "descrizione": "La custodia cautelare in carcere \u00e8 una misura cautelare personale, coercitiva e custodiale, prevista e disciplinata dall'art. 285 codice di procedura penale. Col provvedimento che dispone la custodia, il giudice ordina agli ufficiali e agli agenti di polizia giudiziaria che l'indagato o imputato sia catturato e immediatamente condotto in un istituto di custodia per rimanervi a disposizione dell'autorit\u00e0 giudiziaria.",
    "risposta_id": "2002",
    "risposta_idPartito": "11",
    "risposta_partito": "avs",
    "risposta_valore": "green",
    "risposta_descrizione": "Va ridotto l\u2019uso della custodia cautelare che produce circa un terzo della popolazione detenuta.",
    "partiti": [
      {
        "risposta_id": "2012",
        "risposta_valore": "green",
        "risposta_descrizione": "Processi pi\u00f9 giusti e rapidi, con parit\u00e0 effettiva tra accusa e difesa, stop all\u2019abuso della custodia cautelare e certezza della pena e del diritto. ",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "2001",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "10",
        "simbolo": "pd.png",
        "descr_lista": "Partito Democratico - Italia Democratica e Progressista",
        "partito": "pd"
      },
      {
        "risposta_id": "2009",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      },
      {
        "risposta_id": "2002",
        "risposta_valore": "green",
        "risposta_descrizione": "Va ridotto l\u2019uso della custodia cautelare che produce circa un terzo della popolazione detenuta.",
        "idPartito": "11",
        "simbolo": "alleanza_verdi_sinistra.png",
        "descr_lista": "Alleanza Verdi e Sinistra",
        "partito": "avs"
      },
      {
        "risposta_id": "2006",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      }
    ]
  },
  {
    "id": "130",
    "domanda": "Riduzione cambi di gruppo in Parlamento",
    "descrizione": null,
    "risposta_id": "2073",
    "risposta_idPartito": "1",
    "risposta_partito": "m5s",
    "risposta_valore": "green",
    "risposta_descrizione": "Completare la riforma dei regolamenti parlamentari per dissuadere I passaggi facili da un gruppo parlamentare all'altro.",
    "partiti": [
      {
        "risposta_id": "2069",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "6",
        "simbolo": "lega_salvini.png",
        "descr_lista": "Lega per Salvini Premier",
        "partito": "lega"
      },
      {
        "risposta_id": "2076",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "2071",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "2068",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "12",
        "simbolo": "ic_di_maio.png",
        "descr_lista": "Impegno Civico Luigi Di Maio - Centro Democratico",
        "partito": "ic"
      },
      {
        "risposta_id": "2073",
        "risposta_valore": "green",
        "risposta_descrizione": "Completare la riforma dei regolamenti parlamentari per dissuadere I passaggi facili da un gruppo parlamentare all'altro.",
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      }
    ]
  },
  {
    "id": "104",
    "domanda": "Riforma del sistema di accoglienza",
    "descrizione": "I centri per l'immigrazione in Italia offrono accoglienza ai cittadini stranieri arrivati nel paese irregolarmente in vista della loro identificazione ed eventuale richiesta di asilo o espulsione. I centri, gestiti dalla Direzione centrale dei servizi civili per l'immigrazione e dell'asilo del Ministero dell'Interno, sono di quattro tipologie: Centri di Primo Soccorso e Accoglienza (CPSA), Centri di Accoglienza (CDA), Centri di Accoglienza per Richiedenti Asilo (CARA), Centri di Identificazione ed Espulsione (CIE).",
    "risposta_id": "1653",
    "risposta_idPartito": "6",
    "risposta_partito": "lega",
    "risposta_valore": "green",
    "risposta_descrizione": "Rivedere e ridefinire le procedure di assegnazione dei servizi e delle forniture e dei beni di gestione dell\u2019accoglienza (siamo tornati ai \u20ac35 al giorno di diaria), ripristinando i costi e servizi per migrante nell\u2019interesse del richiedente asilo e non dei soggetti gestori.",
    "partiti": [
      {
        "risposta_id": "1658",
        "risposta_valore": "green",
        "risposta_descrizione": "Il solo modo per diminuire radicalmente gli ingressi irregolari, \u00e8 ripristinare forme di immigrazione regolare e programmata.",
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "1660",
        "risposta_valore": "green",
        "risposta_descrizione": "Non rinnovo del Memorandum Of Understanding con la Libia e accordi simili con i Paesi che non rispettano concretamente la Convenzione di Ginevra e chiusura dei Centri Permanenti per il Rimpatrio (ex CIE) e abolizione di ogni forma di detenzione amministrativa. ",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "1664",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "13",
        "simbolo": "vita.png",
        "descr_lista": "Vita",
        "partito": "vita"
      },
      {
        "risposta_id": "1657",
        "risposta_valore": "green",
        "risposta_descrizione": "Adozione di un meccanismo comunitario per definire la gestione dei flussi migratori e le operazioni di primo intervento, nonch\u00e8 la successiva accoglienza, ripartizione e distribuzione tra i paesi membri dell'Unione europea.",
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      },
      {
        "risposta_id": "1653",
        "risposta_valore": "green",
        "risposta_descrizione": "Rivedere e ridefinire le procedure di assegnazione dei servizi e delle forniture e dei beni di gestione dell\u2019accoglienza (siamo tornati ai \u20ac35 al giorno di diaria), ripristinando i costi e servizi per migrante nell\u2019interesse del richiedente asilo e non dei soggetti gestori.",
        "idPartito": "6",
        "simbolo": "lega_salvini.png",
        "descr_lista": "Lega per Salvini Premier",
        "partito": "lega"
      }
    ]
  },
  {
    "id": "98",
    "domanda": "Aumento delle spese militari",
    "descrizione": "La spesa per la difesa in Italia indica la spesa per la difesa per le forze armate italiane. Il DPR 15 novembre 2012, n. 236, regolamenta la definizione del prezzo e delle condizioni di acquisto per appalti e forniture, ad affidamento diretto o con gara d'appalto pubblicata nella Gazzetta Ufficiale della Repubblica Italiana, con le procedure della NATO. Il criterio generale \u00e8 quello dell'offerta al prezzo pi\u00f9 basso (art. 33-34), salvo valutazione di congruit\u00e0.",
    "risposta_id": "1564",
    "risposta_idPartito": "14",
    "risposta_partito": "up",
    "risposta_valore": "red",
    "risposta_descrizione": "Operare per il superamento della NATO, per la sovranit\u00e0 nazionale con lo stop ad armi nucleari nel nostro Paese e per sostenere politiche di disarmo a livello globale, opponendosi all\u2019aumento delle spese militari al 2% del PIL ed impegnandosi alla progressiva riduzione delle stesse.",
    "partiti": [
      {
        "risposta_id": "1564",
        "risposta_valore": "red",
        "risposta_descrizione": "Operare per il superamento della NATO, per la sovranit\u00e0 nazionale con lo stop ad armi nucleari nel nostro Paese e per sostenere politiche di disarmo a livello globale, opponendosi all\u2019aumento delle spese militari al 2% del PIL ed impegnandosi alla progressiva riduzione delle stesse.",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "1557",
        "risposta_valore": "green",
        "risposta_descrizione": "\u00c8 evidente come l\u2019incremento, o per contro la riduzione, delle risorse nel comparto Difesa abbia evidenti ricadute positive, o negative, anche sulla sicurezza interna dello Stato e dei cittadini, per tutto ci\u00f2 che viene operato dall\u2019Arma. Maggiori risorse per la Difesa comportano anche la possibilit\u00e0 di investimenti nel nuovo dominio cibernetico ed in quello spaziale con la relativa ricaduta sulla maggiore sicurezza delle reti e delle infrastrutture critiche in cui attualmente siamo largamente carenti. Possedere un adeguato apparato di Difesa ed una industria di settore all\u2019avanguardia e concorrenziale sul piano internazionale, significa inoltre avere un efficace strumento di \u201cdiplomazia parallela\u201d utile a costruire e rinsaldare rapporti internazionali ed anche, perch\u00e9 no, a condizionare scelte di altri attori statuali, nell\u2019interesse strategico del Paese.",
        "idPartito": "6",
        "simbolo": "lega_salvini.png",
        "descr_lista": "Lega per Salvini Premier",
        "partito": "lega"
      },
      {
        "risposta_id": "1565",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "15",
        "simbolo": "mastella.png",
        "descr_lista": "Mastella Noi di Centro Europeisti",
        "partito": "ndceu"
      },
      {
        "risposta_id": "1568",
        "risposta_valore": "red",
        "risposta_descrizione": "Italia nazione pacifica e neutrale, esclusa da alleanze militari armate. - Ripudio della guerra. - Chiusura e dismissione delle basi militari di forze straniere sul territorio nazionale. - Piena attuazione del Trattato per la proibizione delle armi nucleari e divieto produzione armamenti sul territorio nazionale.",
        "idPartito": "13",
        "simbolo": "vita.png",
        "descr_lista": "Vita",
        "partito": "vita"
      },
      {
        "risposta_id": "1556",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "12",
        "simbolo": "ic_di_maio.png",
        "descr_lista": "Impegno Civico Luigi Di Maio - Centro Democratico",
        "partito": "ic"
      }
    ]
  },
  {
    "id": "2",
    "domanda": "Taglio del cuneo fiscale",
    "descrizione": "Il cuneo fiscale \u00e8 un indicatore percentuale che indica il rapporto tra tutte le imposte sul lavoro (dirette, indirette e contributi previdenziali) e il costo del lavoro complessivo.",
    "risposta_id": "30",
    "risposta_idPartito": "7",
    "risposta_partito": "italexit",
    "risposta_valore": "green",
    "risposta_descrizione": "Siamo favorevoli alla riduzione del cuneo fiscale e all'aumento dei salari.",
    "partiti": [
      {
        "risposta_id": "27",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      },
      {
        "risposta_id": "28",
        "risposta_valore": "green",
        "risposta_descrizione": "Riforma fiscale per ridurre le tasse ai redditi medi e bassi e aumentarle ai redditi alti, con stralcio e cancellazione della riforma fiscale di Draghi che ha tagliato le tasse ai ricchi. Espansione della no-tax area da 8000 a 10.000 euro, perimetrandola per evitare che favorisca anche i redditi alti.",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "26",
        "risposta_valore": "green",
        "risposta_descrizione": "Proponiamo di riformare l\u2019Irpef attraverso questi interventi:\u2022 introduzione di un minimo esente, inteso come maxi-deduzione corrispondente all\u2019ammon- tare che viene giudicato essenziale per sopravvivere. Esso, in una societ\u00e0 liberale e attenta agli ultimi, non pu\u00f2 essere oggetto di tassazione da parte dello Stato;\u2022 unificazione tra la detrazione per lavoro autonomo e quella per lavoro dipendente; \u2022 semplificazione dell\u2019imposta, spostando tutte le spese fiscali in un sistema a rimborso diretto: pagamenti con strumenti tracciabili, e periodicamente lo Stato rimborser\u00e0 la percen- tuale oggetto della vecchia detrazione; \u2022 semplificazione della struttura delle aliquote;\u2022 detassazione specifica per i giovani: totale fino a 25 anni, ridotta del 50% fino a 29 anni;\u2022 creazione della tassazione negativa, sul modello anglosassone: per i livelli di retribuzione inferiori al minimo esente, lo Stato integrer\u00e0 la retribuzione del lavoratore in misura crescen- te con la retribuzione stessa. In questo modo, si inverte la distorsione causata dal Rdc e lo si trasforma in una logica per la quale pi\u00f9 il percettore si impegna, pi\u00f9 la retribuzione viene integrata;\u2022 detassazione straordinaria - per il solo 2022 \u2013 di una extra mensilit\u00e0 (fino a 2,200 euro), che le imprese potranno scegliere di erogare ai propri dipendenti ai fini alleviare gli effetti dell\u2019inflazione;",
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "30",
        "risposta_valore": "green",
        "risposta_descrizione": "Siamo favorevoli alla riduzione del cuneo fiscale e all'aumento dei salari.",
        "idPartito": "7",
        "simbolo": "italexit_paragone.png",
        "descr_lista": "Italexit per L'italia",
        "partito": "italexit"
      },
      {
        "risposta_id": "23",
        "risposta_valore": "green",
        "risposta_descrizione": "Taglio del cuneo fiscale per imprese e lavoratori: 1\u00b0 Fase \u2013 incremento delle misure previste dal Decreto Aiuti, il provvedimento prevede un taglio del cuneo fiscale di 1,2 punti da luglio a dicembre per i redditi fino a 35 mila euro, in aggiunta a quello dello 0,8% stabilito da gennaio e attualmente in vigore. 2\u00b0 Fase \u2013 rendere strutturale la proposta elaborata dal Centro Studi Confindustria che prevede di impegnare 16 miliardi di euro per una riduzione del cuneo contributivo sul lavoro dipendente per lavoratori con redditi fino a 35mila euro, cos\u00ec suddiviso: due terzi per la riduzione dell\u2019aliquota a carico dei lavoratori, pari a circa 10,7 miliardi; un terzo per la riduzione dell\u2019aliquota a carico dei datori di lavoro, pari a circa 5,3 miliardi. Ci\u00f2 implicherebbe una mensilit\u00e0 in pi\u00f9 all\u2019anno.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      }
    ]
  },
  {
    "id": "89",
    "domanda": "Tutela dell'ambiente e del paesaggio",
    "descrizione": null,
    "risposta_id": "1415",
    "risposta_idPartito": "4",
    "risposta_partito": "fi",
    "risposta_valore": "green",
    "risposta_descrizione": "\u2022 Rispettare e aggiornare gli impegni internazionali assunti dall'Italia per contrastare i cambiamenti climatici.\u2022 Definizione ed attuazione del piano strategico nazionale di economia circolare in grado di ridurre il consumo delle risorse naturali, aumentare il livello qualitativo e quantitativo del riciclo dei rifiuti, ridurre i conferimenti in discarica, trasformare il rifiuto in energia rinnovabile attraverso la realizzazione di impianti innovativi e sostenibili.\u2022 Piano straordinario per la tutela e la salvaguardia della qualit\u00e0 delle acque marittime e interne ed efficientamento delle reti idriche per limitare il fenomeno della dispersione delle acque. \u2022 Programma straordinario di resilienza delle aree a rischio dissesto idrogeologico con interventi mirati.\u2022 Salvaguardia della biodiversit\u00e0, anche attraverso l'istituzione di nuove riserve naturali.\u2022 Promozione dell'educazione ambientale e al rispetto della fauna e della flora.\u2022 Rimboschimento e piantumazione di alberi sull'intero territorio nazionale, in particolare nelle zone colpite da incendi o calamit\u00e0 naturali.\u2022 Incentivare l'utilizzo del trasporto pubblico e promuovere e favorire politiche di mobilit\u00e0 urbana sostenibile.",
    "partiti": [
      {
        "risposta_id": "1414",
        "risposta_valore": "green",
        "risposta_descrizione": "\u2022 Rispettare e aggiornare gli impegni internazionali assunti dall'Italia per contrastare i cambiamenti climatici.\u2022 Definizione ed attuazione del piano strategico nazionale di economia circolare in grado di ridurre il consumo delle risorse naturali, aumentare il livello qualitativo e quantitativo del riciclo dei rifiuti, ridurre i conferimenti in discarica, trasformare il rifiuto in energia rinnovabile attraverso la realizzazione di impianti innovativi e sostenibili.\u2022 Piano straordinario per la tutela e la salvaguardia della qualit\u00e0 delle acque marittime e interne ed efficientamento delle reti idriche per limitare il fenomeno della dispersione delle acque. \u2022 Programma straordinario di resilienza delle aree a rischio dissesto idrogeologico con interventi mirati. \u2022 Salvaguardia della biodiversit\u00e0, anche attraverso l'istituzione di nuove riserve naturali. \u2022 Promozione dell'educazione ambientale e al rispetto della fauna e della flora. \u2022 Rimboschimento e piantumazione di alberi sull'intero territorio nazionale, in particolare nelle zone colpite da incendi o calamit\u00e0 naturali. \u2022 Incentivare l'utilizzo del trasporto pubblico e promuovere e favorire politiche di mobilit\u00e0 urbana sostenibile.",
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      },
      {
        "risposta_id": "1410",
        "risposta_valore": "green",
        "risposta_descrizione": "L\u2019Italia non ha grandi giacimenti petroliferi, ma la sua grande risorsa culturale ed economica sta nella bellezza, bellezza degli straordinari paesaggi marini collinari e montani (non sempre rispettati), bellezza del grandissimo patrimonio di opere d\u2019arte, di casali, di citt\u00e0 murate, di borghi antichi, di centri storici unici al modo, racchiusi anche in piccoli sperduti comuni e, se volessimo e sapessimo vederli, nelle periferie delle citt\u00e0. Vogliamo recuperare e salvaguardare gli elementi costituenti la nostra identit\u00e0, consapevoli che solo dalla loro conservazione pu\u00f2 derivare benessere duraturo per il nostro Paese.",
        "idPartito": "11",
        "simbolo": "alleanza_verdi_sinistra.png",
        "descr_lista": "Alleanza Verdi e Sinistra",
        "partito": "avs"
      },
      {
        "risposta_id": "1415",
        "risposta_valore": "green",
        "risposta_descrizione": "\u2022 Rispettare e aggiornare gli impegni internazionali assunti dall'Italia per contrastare i cambiamenti climatici. \u2022 Definizione ed attuazione del piano strategico nazionale di economia circolare in grado di ridurre il consumo delle risorse naturali, aumentare il livello qualitativo e quantitativo del riciclo dei rifiuti, ridurre i conferimenti in discarica, trasformare il rifiuto in energia rinnovabile attraverso la realizzazione di impianti innovativi e sostenibili.\u2022 Piano straordinario per la tutela e la salvaguardia della qualit\u00e0 delle acque marittime e interne ed efficientamento delle reti idriche per limitare il fenomeno della dispersione delle acque. \u2022 Programma straordinario di resilienza delle aree a rischio dissesto idrogeologico con interventi mirati. \u2022 Salvaguardia della biodiversit\u00e0, anche attraverso l'istituzione di nuove riserve naturali. \u2022 Promozione dell'educazione ambientale e al rispetto della fauna e della flora. \u2022 Rimboschimento e piantumazione di alberi sull'intero territorio nazionale, in particolare nelle zone colpite da incendi o calamit\u00e0 naturali. \u2022 Incentivare l'utilizzo del trasporto pubblico e promuovere e favorire politiche di mobilit\u00e0 urbana sostenibile.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "1412",
        "risposta_valore": "green",
        "risposta_descrizione": "Bisogna salvare l\u2019ambiente senza sacrificare l\u2019economia. Proteggere il futuro dell\u2019ambiente, conciliandolo con il progresso e il benessere sociale, richiede un approccio nuovo.",
        "idPartito": "12",
        "simbolo": "ic_di_maio.png",
        "descr_lista": "Impegno Civico Luigi Di Maio - Centro Democratico",
        "partito": "ic"
      },
      {
        "risposta_id": "1420",
        "risposta_valore": "green",
        "risposta_descrizione": "Proteggere l\u2019ambiente e sostenere l\u2019agricoltura 1. Rispettare e superare gli impegni nazionali di riduzione delle emissioni dell\u2019Accordo di Parigi. 2. Legge nazionale per portare a zero il consumo di suolo, che blocchi entro il 2025 le espansioni in zone naturali e agricole e attivi un programma per il recupero, il riuso e la manutenzione del patrimonio esistente. 3. Disincentivare produzione, distribuzione e uso di prodotti usa e getta o difficilmente riparabili e l\u2019utilizzo di inceneritori. S\u00ec al compostaggio ed al trattamento differenziato dei rifiuti. Basta discariche. 4. Riforma agroecologica della Politica Agricola Comune (PAC), tagliando i sussidi agli allevamenti intensivi e sostenendo aziende agricole che producono con metodi ecologici e a tutela della biodiversit\u00e0. 5. Aggiornamento e attuazione immediata del Piano di Azione Nazionale per l'uso sostenibile dei prodotti fitosanitari (PAN), che prevede il divieto di utilizzo di pesticidi tossici, divieto di produzione e utilizzo di glifosato e altri fitosanitari nocivi per le api e gli altri impollinatori. 6. Fondo pubblico di sostegno per aziende cooperative sociali e comunit\u00e0 che passano all'agricoltura biologica e che promuovono pratiche agricole ecosostenibili. 7. Piano straordinario per la rinaturazione delle sponde fluviali e in generale degli ecosistemi fluviali per ristabilire gli ecosistemi di acqua dolce e le funzioni naturali dei fiumi. 8. Nuova legge nazionale dell\u2019urbanistica adeguata alla crisi climatica e ai fenomeni di espansione urbana disordinati e frammentati degli ultimi 30 anni, con aumento delle aree pro capite per servizi pubblici e aree verdi. 9. Piena applicazione della Strategia europea sulla biodiversit\u00e0. Nuova Legge quadro sulle Aree naturali protette che ponga al centro della sua strategia l\u2019implementazione del Sistema di aree protette, che dovr\u00e0 raggiungere il 30% della superficie sia terrestre che marina entro il 2030. Riforestazione dei boschi e delle aree urbane con almeno 1 miliardo di alberi all\u2019anno da piantare per aumentare ossigeno rispetto all\u2019emissione di CO2. 10. Tutela del benessere animale e istituzione del Garante Nazionale dei Diritti degli Animali. Sostegno alle misure proposte dalle associazioni animaliste.",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      }
    ]
  },
  {
    "id": "51",
    "domanda": "Legalizzazione della cannabis",
    "descrizione": "La legalit\u00e0 della cannabis varia da paese a paese: in Italia \u00e8 illegale lo spaccio (anche a titolo gratuito), ma non il possesso per l'uso personale, che costituisce solo un illecito amministrativo punibile con sospensione della patente di guida da 1-3 mesi, sospensione del passaporto e della carta d'identit\u00e0 ai fini di espatrio per la medesima durata, senza sporcare la fedina penale. \u00c8 invece permessa la vendita di Cannabis light, con soglia massima di principio stupefacente (THC) fissata tra lo 0,2% e lo 0,5%.",
    "risposta_id": "812",
    "risposta_idPartito": "14",
    "risposta_partito": "up",
    "risposta_valore": "green",
    "risposta_descrizione": "Legalizzare cannabis e droghe leggere anche per togliere alle mafie un mercato redditizio. Investimento in politiche sociali, sanitarie e educative per la riduzione della domanda di droghe pesanti (finanziato con una percentuale sui beni sequestrati).",
    "partiti": [
      {
        "risposta_id": "808",
        "risposta_valore": "red",
        "risposta_descrizione": "Combattere lo spaccio e la diffusione delle droghe con ogni mezzo, anche attraverso campagne di prevenzione e informazione.",
        "idPartito": "5",
        "simbolo": "noi_moderati.png",
        "descr_lista": "Noi Moderati\/Lupi - Toti - Brugnaro - UDC",
        "partito": "noim"
      },
      {
        "risposta_id": "812",
        "risposta_valore": "green",
        "risposta_descrizione": "Legalizzare cannabis e droghe leggere anche per togliere alle mafie un mercato redditizio. Investimento in politiche sociali, sanitarie e educative per la riduzione della domanda di droghe pesanti (finanziato con una percentuale sui beni sequestrati).",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "807",
        "risposta_valore": "red",
        "risposta_descrizione": "Combattere lo spaccio e la diffusione delle droghe con ogni mezzo, anche attraverso campagne di prevenzione e informazione.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "814",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "7",
        "simbolo": "italexit_paragone.png",
        "descr_lista": "Italexit per L'italia",
        "partito": "italexit"
      },
      {
        "risposta_id": "811",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      }
    ]
  },
  {
    "id": "71",
    "domanda": "Sostegno psicologico scolastico",
    "descrizione": "Gli psicologi scolastici sono addestrati a svolgere test psicologici, valutazione e consulenza psicoeducativa, e nei codici etici, legali e amministrativi della loro professione. La psicologia scolastica affronta una variet\u00e0 di temi e di problematiche, come ad esempio i disturbi specifici di apprendimento, l'esclusione sociale, la violenza, il bullismo e la multiculturalit\u00e0.",
    "risposta_id": "1127",
    "risposta_idPartito": "4",
    "risposta_partito": "fi",
    "risposta_valore": "green",
    "risposta_descrizione": "Istituzione della figura dello psicologo scolastico e dello psicologo per l\u2019assistenza primaria.",
    "partiti": [
      {
        "risposta_id": "1131",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      },
      {
        "risposta_id": "1122",
        "risposta_valore": "green",
        "risposta_descrizione": "Ritornare all\u2019esperienza dell\u2019organico funzionale ovvero di un monte ore aggiuntivo a quello strettamente curricolare, di cui le scuole dispongano, per articolare progettualit\u00e0 specifiche; investire per garantire un sostegno psicologico permanente nelle scuole, che nel periodo pandemico si \u00e8 dimostrato un presidio imprescindibile, ma garantito in pochissime realt\u00e0.",
        "idPartito": "11",
        "simbolo": "alleanza_verdi_sinistra.png",
        "descr_lista": "Alleanza Verdi e Sinistra",
        "partito": "avs"
      },
      {
        "risposta_id": "1130",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "1127",
        "risposta_valore": "green",
        "risposta_descrizione": "Istituzione della figura dello psicologo scolastico e dello psicologo per l\u2019assistenza primaria.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "1134",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "7",
        "simbolo": "italexit_paragone.png",
        "descr_lista": "Italexit per L'italia",
        "partito": "italexit"
      }
    ]
  },
  {
    "id": "70",
    "domanda": "Autonomia differenziata",
    "descrizione": null,
    "risposta_id": "1108",
    "risposta_idPartito": "12",
    "risposta_partito": "ic",
    "risposta_valore": "red",
    "risposta_descrizione": "Pur mantenendo il principio della sanit\u00e0 regionale occorre implementare un maggior coordinamento a livello centrale che punti all\u2019uniformit\u00e0 su tutto il territorio nazionale delle prestazioni erogate.",
    "partiti": [
      {
        "risposta_id": "1108",
        "risposta_valore": "red",
        "risposta_descrizione": "Pur mantenendo il principio della sanit\u00e0 regionale occorre implementare un maggior coordinamento a livello centrale che punti all\u2019uniformit\u00e0 su tutto il territorio nazionale delle prestazioni erogate.",
        "idPartito": "12",
        "simbolo": "ic_di_maio.png",
        "descr_lista": "Impegno Civico Luigi Di Maio - Centro Democratico",
        "partito": "ic"
      },
      {
        "risposta_id": "1110",
        "risposta_valore": "green",
        "risposta_descrizione": "Attuazione virtuosa di federalismo fiscale e autonomie, con completa definizione dei livelli essenziali delle prestazioni e corretto funzionamento del fondo di perequazione, per assicurare coesione e unit\u00e0 nazionale.",
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      },
      {
        "risposta_id": null,
        "risposta_valore": null,
        "risposta_descrizione": null,
        "idPartito": "9",
        "simbolo": "europa_bonino.png",
        "descr_lista": "+Europa",
        "partito": "+e"
      },
      {
        "risposta_id": "1115",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      },
      {
        "risposta_id": "1111",
        "risposta_valore": "green",
        "risposta_descrizione": "Rafforzamento delle autonomie locali. Attuazione di un modello di federalismo responsabile che armonizzi la maggiore autonomia prevista dal titolo V della Costituzione e gi\u00e0 richiesta da alcune regioni in attuazione dell\u2019articolo 116, portando a conclusione le trattative attualmente aperte tra Stato e Regioni.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      }
    ]
  },
  {
    "id": "38",
    "domanda": "Alloggi popolari",
    "descrizione": "L'Istituto Autonomo Case Popolari (in sigla IACP) \u00e8 un ente italiano, avente lo scopo di promuovere, realizzare e gestire edilizia pubblica finalizzata all'assegnazione di abitazioni ai meno abbienti, segnatamente in locazione a canoni calmierati.",
    "risposta_id": "607",
    "risposta_idPartito": "8",
    "risposta_partito": "isp",
    "risposta_valore": "green",
    "risposta_descrizione": "Piano straordinario per le case popolari.",
    "partiti": [
      {
        "risposta_id": "602",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "598",
        "risposta_valore": "green",
        "risposta_descrizione": "Piano straordinario di riqualificazione delle periferie, anche attraverso il rilancio dell'edilizia residenziale pubblica.",
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      },
      {
        "risposta_id": "608",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "13",
        "simbolo": "vita.png",
        "descr_lista": "Vita",
        "partito": "vita"
      },
      {
        "risposta_id": "607",
        "risposta_valore": "green",
        "risposta_descrizione": "Piano straordinario per le case popolari.",
        "idPartito": "8",
        "simbolo": "italia_sovrana_popolare.png",
        "descr_lista": "Italia Sovrana E Popolare",
        "partito": "isp"
      },
      {
        "risposta_id": "597",
        "risposta_valore": "yellow",
        "risposta_descrizione": "Riforma dei criteri di graduatoria per l\u2019assegnazione delle case popolari per le giovani famiglie e le famiglie numerose.",
        "idPartito": "6",
        "simbolo": "lega_salvini.png",
        "descr_lista": "Lega per Salvini Premier",
        "partito": "lega"
      }
    ]
  },
  {
    "id": "46",
    "domanda": "Diritto all'aborto",
    "descrizione": "L'aborto \u00e8 l'interruzione della gravidanza prima della ventesima o ventiduesima settimana (cio\u00e8 nel periodo in cui il feto non \u00e8 capace di vita extrauterina), con conseguente espulsione del feto o dell'embrione dall'utero. Pu\u00f2 avvenire spontaneamente o essere procurato.",
    "risposta_id": "732",
    "risposta_idPartito": "14",
    "risposta_partito": "up",
    "risposta_valore": "green",
    "risposta_descrizione": "Misure a sostegno della piena applicazione della legge 194\/78 sull\u2019interruzione volontaria di gravidanza in tutto il territorio nazionale. L\u2019obiezione di coscienza nel servizio sanitario nazionale lede il diritto all\u2019autodeterminazione delle donne.",
    "partiti": [
      {
        "risposta_id": "726",
        "risposta_valore": "green",
        "risposta_descrizione": "Piena applicazione della Legge 194 del 1978 sull\u2019interruzione volontaria di gravidanza, a partire dalla prevenzione.",
        "idPartito": "3",
        "simbolo": "fdi_meloni.png",
        "descr_lista": "Fratelli d'Italia con Giorgia Meloni",
        "partito": "fdi"
      },
      {
        "risposta_id": "735",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "8",
        "simbolo": "italia_sovrana_popolare.png",
        "descr_lista": "Italia Sovrana E Popolare",
        "partito": "isp"
      },
      {
        "risposta_id": "732",
        "risposta_valore": "green",
        "risposta_descrizione": "Misure a sostegno della piena applicazione della legge 194\/78 sull\u2019interruzione volontaria di gravidanza in tutto il territorio nazionale. L\u2019obiezione di coscienza nel servizio sanitario nazionale lede il diritto all\u2019autodeterminazione delle donne.",
        "idPartito": "14",
        "simbolo": "unione_popolare.png",
        "descr_lista": "Unione Popolare con De Magistris",
        "partito": "up"
      },
      {
        "risposta_id": "721",
        "risposta_valore": "green",
        "risposta_descrizione": "Pieno riconoscimento dei diritti sessuali e riproduttivi delle donne, garantendo l\u2019applicazione della legge 194\/1978 in ogni sua parte sull\u2019intero territorio nazionale e rafforzando la rete di consultori.",
        "idPartito": "10",
        "simbolo": "pd.png",
        "descr_lista": "Partito Democratico - Italia Democratica e Progressista",
        "partito": "pd"
      },
      {
        "risposta_id": "724",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "12",
        "simbolo": "ic_di_maio.png",
        "descr_lista": "Impegno Civico Luigi Di Maio - Centro Democratico",
        "partito": "ic"
      }
    ]
  },
  {
    "id": "44",
    "domanda": "Ius soli",
    "descrizione": "Ius soli \u00e8 un'espressione giuridica che indica l'acquisizione della cittadinanza di un dato Paese come conseguenza del fatto giuridico di essere nati sul suo territorio, indipendentemente dalla cittadinanza dei genitori.Si contrappone allo ius sanguinis (o \u00abdiritto del sangue\u00bb), che indica invece la trasmissione alla prole della cittadinanza del genitore, sulla base pertanto della discendenza.",
    "risposta_id": "699",
    "risposta_idPartito": "17",
    "risposta_partito": "altita",
    "risposta_valore": "red",
    "risposta_descrizione": "La cittadinanza italiana non si regala, non si svaluta, si conquista con una regolare richiesta compiuta a 18 anni, se la si vuole. Nessun diritto sia negato ai bimbi stranieri che vivono sul suolo italico, ma la cittadinanza italiana si chiede alla fine di un percorso.",
    "partiti": [
      {
        "risposta_id": "702",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "7",
        "simbolo": "italexit_paragone.png",
        "descr_lista": "Italexit per L'italia",
        "partito": "italexit"
      },
      {
        "risposta_id": "695",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "690",
        "risposta_valore": "green",
        "risposta_descrizione": "Una nuova legge sulla cittadinanza, che parta dallo ius soli e dallo ius scholae, per restituire piena dignit\u00e0 ai tanti e alle tante cittadine che \u201cda straniere\/i\u201d contribuiscono alla ricchezza del nostro Paese.",
        "idPartito": "11",
        "simbolo": "alleanza_verdi_sinistra.png",
        "descr_lista": "Alleanza Verdi e Sinistra",
        "partito": "avs"
      },
      {
        "risposta_id": "698",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "2",
        "simbolo": "calenda.png",
        "descr_lista": "Azione - Italia Viva - Calenda",
        "partito": "aziv"
      },
      {
        "risposta_id": "699",
        "risposta_valore": "red",
        "risposta_descrizione": "La cittadinanza italiana non si regala, non si svaluta, si conquista con una regolare richiesta compiuta a 18 anni, se la si vuole. Nessun diritto sia negato ai bimbi stranieri che vivono sul suolo italico, ma la cittadinanza italiana si chiede alla fine di un percorso.",
        "idPartito": "17",
        "simbolo": "alternativa_per_l'italia.png",
        "descr_lista": "Alternativa per l'Italia - No Green Pass",
        "partito": "altita"
      }
    ]
  },
  {
    "id": "74",
    "domanda": "Sostegno ai disabili nelle scuole",
    "descrizione": "L'integrazione scolastica si ottiene attraverso l'affiancamento, nell'ambiente scolastico, di un operatore qualificato alla persona con disabilit\u00e0 e la programmazione di un'attivit\u00e0 scolastica specifica tale da permetterle l'apprendimento e soprattutto la relazione nell'ambiente scolastico e sociale.",
    "risposta_id": "1175",
    "risposta_idPartito": "4",
    "risposta_partito": "fi",
    "risposta_valore": "green",
    "risposta_descrizione": "Inclusione scolastica per gli alunni e alunne con disabilit\u00e0 con l\u2019istituzione di apposite classi di concorso per il sostegno didattico in tutti i gradi del sistema di istruzione.",
    "partiti": [
      {
        "risposta_id": "1173",
        "risposta_valore": "green",
        "risposta_descrizione": "Oltre un terzo dei docenti attualmente incaricati su posto di sostegno \u00e8 privo di specializzazione, ovvero della formazione necessaria. Chi ha maturato almeno tre anni di esperienza sul campo nel sostegno ad alunni con disabilit\u00e0 deve poter accedere direttamente ai corsi di specializzazione.",
        "idPartito": "6",
        "simbolo": "lega_salvini.png",
        "descr_lista": "Lega per Salvini Premier",
        "partito": "lega"
      },
      {
        "risposta_id": "1175",
        "risposta_valore": "green",
        "risposta_descrizione": "Inclusione scolastica per gli alunni e alunne con disabilit\u00e0 con l\u2019istituzione di apposite classi di concorso per il sostegno didattico in tutti i gradi del sistema di istruzione.",
        "idPartito": "4",
        "simbolo": "fi_berlusconi.png",
        "descr_lista": "Forza Italia",
        "partito": "fi"
      },
      {
        "risposta_id": "1177",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "1",
        "simbolo": "m5s.png",
        "descr_lista": "Movimento 5 Stelle",
        "partito": "m5s"
      },
      {
        "risposta_id": "1183",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "8",
        "simbolo": "italia_sovrana_popolare.png",
        "descr_lista": "Italia Sovrana E Popolare",
        "partito": "isp"
      },
      {
        "risposta_id": "1182",
        "risposta_valore": "grey",
        "risposta_descrizione": null,
        "idPartito": "7",
        "simbolo": "italexit_paragone.png",
        "descr_lista": "Italexit per L'italia",
        "partito": "italexit"
      }
    ]
  }
]`;
var obj = JSON.parse(text);




//if "Inizia" button clicked

inizia_btn.onclick = ()=>{ //da definire inizia_btn
    
    showQuetion(0); //calling showQuestions function
    queCounter(1); //passing 1 parameter to queCounter
    inizia_btn.classList.add('hide'); //you can delete it
    testata.classList.add('hide')
    section_game.classList.add('show')
    //window.scrollBy(0, 1000); for scrollying down
    console.log(obj[1].partiti[3].risposta_descrizione)
    risposta_corretta.style.opacity=0;
    
}


let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter; //per la barra nel risultato finale
let counterLine;
let widthValue = 0;

//const restart_quiz = result_box.querySelector(".buttons .restart"); to review
//const quit_quiz = result_box.querySelector(".buttons .quit"); to review

// if restartQuiz button clicked

restart_quiz.onclick = ()=>{
    section_game.classList.add('show') //show quiz box
    result_box.classList.remove("show"); //hide result box
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetion(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    risposta_corretta.style.opacity=0;
    next_btn.classList.remove("show"); //hide the next button
}



const next_btn = document.querySelector("#btn");
const bottom_ques_counter = document.querySelector(".occhiello .argomento #numero");




// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetion(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        var aggiunta1 =document.querySelector('.aggiunta')
        next_btn.classList.remove("show"); //hide the next button
        risposta_corretta.innerHTML=" "
        
        risposta_corretta.style.opacity=0;
        aggiunta1.remove()
        var continua_a_leggere1= document.querySelector(".continua1")
        continua_a_leggere1.remove()
        
        
        
    }else{
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(); //calling showResult function
  }
}
//getting questions and option from array

function showQuetion(index){
  if (continua_a_leggere.classList.contains('show')) {
    continua_a_leggere.classList.remove("show");
}
    const que_text = document.querySelector(".container-text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span id="domanda_casuale">' + obj[index].risposta_descrizione +'</span>';
    let option_tag = '<div class="domanda"><p>Chi lo dice?</p></div><div class="prova2"><img class= "dot" id= "' + obj[index].partiti[0].idPartito + '" src="/img/' + obj[index].partiti[0].simbolo + '"></span> <p class=didascalia>'+ obj[index].partiti[0].descr_lista + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + obj[index].partiti[1].idPartito + '" src="/img/' + obj[index].partiti[1].simbolo + '"></img></span> <p class=didascalia>'+ obj[index].partiti[1].descr_lista + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + obj[index].partiti[2].idPartito + '" src="/img/' + obj[index].partiti[2].simbolo + '"></span> <p class=didascalia>'+ obj[index].partiti[2].descr_lista + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + obj[index].partiti[3].idPartito + '" src="/img/' + obj[index].partiti[3].simbolo + '"></span> <p class=didascalia>'+ obj[index].partiti[3].descr_lista + '</p></div>'
    +'<div class="prova2"><img class= "dot" id= "' + obj[index].partiti[4].idPartito + '" src="/img/' + obj[index].partiti[4].simbolo + '"></span> <p class=didascalia>'+ obj[index].partiti[4].descr_lista + '</p></div></div>';
    
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    if (overflow.offsetHeight < overflow.scrollHeight ||
      overflow.offsetWidth < overflow.scrollWidth) {
      overflow.classList.add("overflow")
      
      continua_a_leggere.classList.add('show')
      
      }
    const option = option_list.querySelectorAll(".didascalia");
    console.log(questions[index].options[1]);
    const options =option_list.querySelectorAll(".dot");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");

    }
    for(i=0; i < options.length; i++){
        options[i].setAttribute("onclick", "optionSelected(this)");
        
        

    }
    corretta.classList.remove('show')
    sbagliata.classList.remove('show')
}


// creating the new div tags which for icons

let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';



//if user clicked on option
function optionSelected(answer){
    //clearInterval(counter); //clear counter
    //clearInterval(counterLine); //clear counterLine
    //let userAns = answer.textContent; //getting user selected option
    let userAns = answer.id; //getting user selected option
    let correcAns = obj[que_count].risposta_idPartito; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    var myStringArray = obj[que_count].partiti;
    

    
    
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        
        userScore += 1; //upgrading score value with 1
        function setGlobal(){
          myStringArray.forEach(element => {
          if (element.idPartito===answer.id) {
            nome_lista=element.descr_lista
            
          } 
        })
      };
        setGlobal()
        
        let id_logo= answer.id
        let logo_correct = document.getElementById(id_logo);
        
        let risposta_text= '<img src="img/iconcorrect.svg.png" class="icon_correct" alt="">'
        +'<h3 class="titolo_esatto">Risposta esatta</h3>'
        +'<p class="subtitle_esatto">S??, questa frase ?? presa dal programma <b>'+ nome_lista + '</b></p>'
        risposta_corretta.innerHTML=risposta_text
        risposta_corretta.style.opacity=1;
        logo_correct.classList.add("correct");
        
        
        
        //answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        const options =option_list.querySelectorAll(".dot");
        
        for(i=0; i < options.length; i++){
            if (options[i]==answer) {
                answer.style.opacity=1;
            } else {
                options[i].style.opacity=0.5;
            }
        }
        
        let crossIconTaggreen = '<img src="img/corretto1.svg.png" class="icon_incorrect1" alt="">';
        answer.insertAdjacentHTML("afterend", crossIconTaggreen); //adding cross icon to correct selected option
        //corretta.classList.add('show')
        
        risposte_arr.push(1);
        console.log(risposte_arr)
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
        console.log(answer)
    }else{
        //answer.classList.add("incorrect"); //adding red color to correct selected option
        function setGlobal(){
          myStringArray.forEach(element => {
          if (element.idPartito===obj[que_count].risposta_idPartito) {
            nome_lista=element.descr_lista  
          } else if(element.idPartito===answer.id){
            nome_lista_sbagliata=element.descr_lista
            if (element.risposta_valore==="grey" || element.risposta_valore=== null ) {
              risposta_text1='<img src="img/Sbagliato_X.svg" class="icon_correct" alt="">'
              + '<h3 class="titolo_sbagliato">Risposta sbagliata</h3>'
              +'<p class="subtitle_esatto">La tua scelta,<b>'+ nome_lista_sbagliata +'</b> non tratta questo argomento nel suo programma elettorale.</p>'
            } else {
              descrizione_alternativa=element.risposta_descrizione
              risposta_text1='<img src="img/Sbagliato_X.svg" class="icon_correct" alt="">'
              + '<h3 class="titolo_sbagliato">Risposta sbagliata</h3>'
              +'<p class="subtitle_esatto">La tua scelta,<b>'+ nome_lista_sbagliata +'</b> si esprime cos?? nel programma: </p> <br>' 
              aggiunta= '<div class="aggiunta">'+ descrizione_alternativa +'</div><div class="continua1" onclick="text_fit()">Continua a leggere </div>'
              sbagliata.insertAdjacentHTML('afterend', aggiunta)
              var aggiunta1=document.querySelector('.aggiunta')
              if (aggiunta1.offsetHeight < aggiunta1.scrollHeight ||
                aggiunta1.offsetWidth < aggiunta1.scrollWidth) {
                aggiunta1.classList.add("overflow")
                var continua_a_leggere1= document.querySelector(".continua1")
                continua_a_leggere1.classList.add('show')
              }
            }
          }
        })
      };
        setGlobal()
        console.log(descrizione_alternativa)
        let crossIconTag = '<img src="img/sbagliato.svg" class="icon_incorrect" alt="">';
        let risposta_text= '<img src="img/iconcorrect.svg.png" class="icon_correct" alt="">'
        +'<h3 class="titolo_esatto">Risposta esatta</h3>'
        +'<p class="subtitle_esatto">La risposta corretta ??: <b>'+ nome_lista + '</b></p>'
        risposta_corretta.innerHTML=risposta_text
        risposta_corretta.style.opacity=1;
         
        sbagliata.innerHTML=risposta_text1
        
        console.log(answer.id)
        risposte_arr.push(0);
        console.log(risposte_arr)
        let id_logo= correcAns
        let logo_correct = document.getElementById(id_logo);
        logo_correct.classList.add("correct");
        let id_logo1= answer.id
        
        let logo_correct1 = document.getElementById(id_logo1);
        logo_correct1.classList.add("incorrect");
        const opacit??2 = document.querySelectorAll('.dot')
        for(i=0; i < opacit??2.length; i++){
        opacit??2[i].style.opacity=0.5}
        const opacit?? = document.querySelectorAll('.dot.correct')
        for(i=0; i < opacit??.length; i++){
        opacit??[i].style.opacity=1}
        const opacit??1 = document.querySelectorAll('.dot.incorrect')
        for(i=0; i < opacit??1.length; i++){
            opacit??1[i].style.opacity=1}
        
        sbagliata.classList.add('show')
        answer.insertAdjacentHTML("afterend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    //loghi.classList.add('disabled') sbagliato
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    //info_box.classList.remove("activeInfo"); //hide info box
    //quiz_box.classList.remove("activeQuiz"); //hide quiz box
    section_game.classList.remove('show')
    result_box.classList.add("show"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    score_number.innerHTML= userScore 
    const numberall = number1.children.length; //getting all option items
    const numberall2 = number2.children.length; //getting all option items
    //pallini per la prima riga
    for(i=0; i < numberall; i++){
      if(risposte_arr[i]===0){
        numero=i+1
        number1.children[i].innerHTML= numero + '<img class="number" src="img/Vector1.png" style="width: 25px; height: 25px;">'
      }
  }
  //pallini per la seconda riga
  for(i=0; i < numberall2; i++){
    if(risposte_arr[i+10]===0){
      numero=i+11
      number2.children[i].innerHTML= numero + '<img class="number" src="img/Vector1.png" style="width: 25px; height: 25px;">'
    }
}
    //barra
    var barra=document.querySelector('.barra')
    if(userScore==20){
      let barraimage = '<img class="risultato" src="img/bar21.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==19){
      let barraimage = '<img class="risultato" src="img/bar20.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==18){
      let barraimage = '<img class="risultato" src="img/bar19.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==17){
      let barraimage = '<img class="risultato" src="img/bar18.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==16){
      let barraimage = '<img class="risultato" src="img/bar17.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==15){
      let barraimage = '<img class="risultato" src="img/bar16.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==14){
      let barraimage = '<img class="risultato" src="img/bar15.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==13){
      let barraimage = '<img class="risultato" src="img/bar14.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==12){
      let barraimage = '<img class="risultato" src="img/bar13.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==11){
      let barraimage = '<img class="risultato" src="img/bar12.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==10){
      let barraimage = '<img class="risultato" src="img/bar11.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==9){
      let barraimage = '<img class="risultato" src="img/bar10.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==8){
      let barraimage = '<img class="risultato" src="img/bar9.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==7){
      let barraimage = '<img class="risultato" src="img/bar8.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==6){
      let barraimage = '<img class="risultato" src="img/bar7.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==5){
      let barraimage = '<img class="risultato" src="img/bar6.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==4){
      let barraimage = '<img class="risultato" src="img/bar5.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==3){
      let barraimage = '<img class="risultato" src="img/bar4.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==2){
      let barraimage = '<img class="risultato" src="img/bar3.png">'
      barra.innerHTML=barraimage
    }
    else if (userScore==1){let barraimage = '<img class="risultato" src="img/bar2.png">'
    barra.innerHTML=barraimage}
    else{
      let barraimage = '<img class="risultato" src="img/bar1.png">'
      barra.innerHTML=barraimage
    }

    //if statement for the text to display-->Talk with Luca in order to get the text 
    if (userScore > 15){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag= '<h1 class="score_title">Eccellente!</h1>'
        +'<p class="score_subtitle">Hai un\' ottima preparazione. Per migliorare vai su <a href="https://www.indecis.it">Indecis.it</a>. I programmi si trovano <a href="https://dait.interno.gov.it/elezioni/speciale-politiche">qui</a> </p>'
        
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 10){ // if user scored more than 1
      let scoreTag= '<h1 class="score_title">Bravo!</h1>'
      +'<p class="score_subtitle">Hai un\' ottima preparazione. Per migliorare vai su <a href="https://www.indecis.it">Indecis.it</a>. I programmi si trovano <a href="https://dait.interno.gov.it/elezioni/speciale-politiche">qui</a> </p>'
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 5){ // if user scored more than 1
      let scoreTag= '<h1 class="score_title">Si pu?? fare meglio!</h1>'
      +'<p class="score_subtitle">Migliora la tua consocenza dei programmi dei partiti su <a href="https://www.indecis.it">Indecis.it</a>. I programmi si trovano <a href="https://dait.interno.gov.it/elezioni/speciale-politiche">qui</a> </p>'
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 5
      let scoreTag= '<h1 class="score_title">Non ci siamo!</h1>'
      +'<p class="score_subtitle">Migliora la tua consocenza dei programmi dei partiti su <a href="https://www.indecis.it">Indecis.it</a>. I programmi si trovano <a href="https://dait.interno.gov.it/elezioni/speciale-politiche">qui</a> </p>'
        scoreText.innerHTML = scoreTag;
    }
    
}



function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //upgrading time value with 1
        time_line.style.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){ //if time value is greater than 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span class="numero">'+ index +'/' + questions.length + '</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
