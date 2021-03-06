[![Build Status](https://travis-ci.org/IMSmobile/app.svg?branch=master)](https://travis-ci.org/IMSmobile/app)
[![Coverage Status](https://coveralls.io/repos/github/IMSmobile/app/badge.svg)](https://coveralls.io/github/IMSmobile/app)

# Imagic IMS Mobile Client

## Vision
Wir möchten es den Kunden von Imagic IMS erlauben auf einfache Weise via mobilen Clients digitale Medien (Bilder, Audio, Video, Texte) im IMS System abzuspeichern. Dazu möchten wir eine plattformunabhängige Mobile-App entwickeln.

![Vision Visualisierung](docs/images/vision_visualisierung.png)

Die Softwareentwicklung wollen wir im Team durchführen. Das Software Projekt soll vom Greenfield zur Konzeption über Architektur bis hin zur Realisation durchgeführt werden.

Das Produkt soll eine generische Open Source Lösung sein, welche das Produktsortiment von IMS erweitert.

Mit Hilfe von Continuous Integration, Reviews und Tests werden wir versuchen eine hohe Softwarequalität zu erreichen, um ein einfach erweiterbares Produkt abzuliefern.

Unser persönliches Ziel ist es, unser Wissen um moderne Cross-Platform Frameworks und Tooling zu erweitern. Durch gelungenes Interaction Design möchten wir den Kunden eine Freude im Alltag bereiten. Auch möchten wir unser Leben erleichtern und eine Continuous Deployment Pipeline aufbauen, damit neue Releases rasch und einfach beim Kunden ankommen. 

Am Schluss soll eine funktional vollständige Android und iOS App entstehen, welche in einem Store zum Download bereitgestellt wird. Mit dieser App sollen digitale Medien auf benutzerfreundliche Art und Weise ins IMS hochgeladen werden können um den Arbeitsalltag der Kunden zu erleichtern.


## Allgemeine Angaben
### Autor

| Photo        | Name | E-Mail |
| ------------ | ---- | ------ |
| ![Michael Leu](docs/images/michael_leu.png) |Michael Leu|michael.leu@hsr.ch|
| ![Niklaus Tschirky](docs/images/niklaus_tschirky.png) |Niklaus Tschirky|niklaus.tschirky@hsr.ch|
| ![Sandro Zbinden](docs/images/sandro_zbinden.png) |Sandro Zbinden|sandro.zbinden@hsr.ch|


## Einführung
### Zweck
Dieses Dokument beschreibt die Organisation, Vorgehensweise sowie die verwendeten Werkzeuge für die Umsetzung des Projekts. Es dient als Einstiegspunkt um sämtliche projektbezogenen Information zu finden.

### Gültigkeitsbereich
Dieses Dokument ist über die ganze Projektdauer gültig. Änderungen werden fortlaufend eingepflegt und können in der [Commit History](https://github.com/IMSmobile/app/commits/master/README.md) dieses Dokuments angesehen werden.
### Referenzen
| Link        | Beschreibung |
| ------------- |-------------|
| [Arbeitspakete (Issues)](https://github.com/IMSmobile/app/issues?utf8=%E2%9C%93&q=)      | Arbeitspakete werden als Github Issues erfasst und durch Labels kategorisiert|
| [Kanban Board](https://waffle.io/IMSmobile/app)| Waffle Kanbanboard verknüpft mit Issues zeigt Backlog und Zustand des aktuellen Sprints|
| [Burnup Chart](https://docs.google.com/spreadsheets/d/1xm9ytSJTCfuZGIuy3rtBODxPf5nHPiAcZkGWlJf7iIY/edit?usp=sharing) | Zeigt auf wieviel wir bis Projektende voraussichtlich erreichen werden |
| [Zeiterfassung](https://docs.google.com/spreadsheets/d/1wPmgUyEP-KACbgbScPLBRBLKIGRuS5j_b-cGsaogbYE/edit?usp=sharing)| Google Spreadsheet Dokument zeigt Aufwand der Projektarbeit|
| [Kalender](https://calendar.google.com/calendar/embed?src=3k1v67336orm53otamk6e4s1rc%40group.calendar.google.com&ctz=Europe/Paris) | Google Calendar für die Planung einzelner Ereignisse |
| [REST API Dokumentation](https://sinv-56028.edu.hsr.ch/) | Dokumentation der IMS REST Schnittstelle |
| [IMS Publisher Police](http://sinv-56028.edu.hsr.ch:40000/ims_publisher_police/) | IMS Publisher mit konfiguriertem Polizeiarchiv |
| [IMS Publisher Medicine](http://sinv-56028.edu.hsr.ch:40000/ims_publisher_medicine/) | IMS Publisher mit konfiguriertem Medizinarchiv |
| [Continuous Integration Server](https://travis-ci.org/IMSmobile/app) | Travis Continuous Integration Test Server mit Log |
| [Wireframes](https://ninjamock.com/s/CM1BL) | Wireframes des Mobile Client |
| [Story Map](https://realtimeboard.com/app/board/o9J_k0HGAYQ=/) | Überblick über sämtliche User-Storys |

### Glossar
Siehe [Glossar](docs/glossary.md)

## Projekt Übersicht
Durch das Projekt _Imagic IMS Mobile Client_ entsteht eine Applikation um Medien via Mobile Devices im digitalen Bildmanagementsystem IMS zu sichern. Das Projekt wird im Rahmen einer Masterarbeit von der Hochschule für Technik in Rapperswil [HSR](www.hsr.ch) für den Studiengang MAS Software-Engineering 2015-2017 durchgeführt.

Die Anforderungen sowie auch deren Priorisierung erfolgt in Abstimmung mit den Firmen Imagic AG und PIC Systems AG.

Die Firma Imagic bietet Lösungen und Systeme für das digitale Bildmanagement. Dem Kunden werden Tools für die Aufnahme, Bearbeitung, Analyse, Verwaltung und Reporting von Bildmaterial angeboten. Diverse Schnittstellen erlauben die Integration einer Vielzahl Fremdapplikationen. Die Firma PIC Systems vertreibt die Bildmanagement Lösung und ist für den Vertrieb, Installation und Instandhaltung der Software Lösung im Bereich der Polizei zuständig.

IMS ist ein sehr flexibles Bildmanagement-System, bei welchem Workflows für verschiedene Zwecke erstellt werden können. Dies erlaubt es, dieselbe Code-Basis für verschiedene Kunden-Segmente wie Industrie, Medizin, Life-Sciences und Polizei einzusetzen.

Die primäre Benutzergruppe für den Mobile Client sind schweizerische Polizeieinheiten. Die neue App sollte einen einfacheren Prozesses bereitstellen, um Bilder während ihrem täglichen Einsatz auf Streife in ihrem IMS Bildverwaltungssystem abzulegen. Die Lösung sollte offen genug sein um sämtliche Datenmodelle von weiteren Kundensegmenten wie Medizin, Industrie und Life Science abzudecken. Als sekundäre Benutzergruppe sehen wir die Verkäufer der IMS Software, welche den Mobile Client zu Demonstrationszwecken nutzen können.

Der Mobile Client soll einen schlanken und bedienerfreundlichen Weg bieten um nebst dem herkömmlichen IMS Client Daten und den unzähligen technischen Schnittstellen (XML, HL7, Dicom uvm.) Medien im Imagic IMS abzuspeichern.

### Lieferumfang

Am Ende des Projekts wird eine Android sowie eine iOS Applikation im Internet zum Download bereitgestellt. Ziel ist es, dass diese Applikation in den offiziellen Appstores von Google (für Android) und Apple (für iOS) öffentlich als kostenlose Applikation heruntergeladen werden kann. Jedoch gibt es keine Garantie dafür, da Applikationen von diesen Stores auch abgelehnt werden können.

Der Umfang der Applikation ist anhand der [Anforderungsanalyse](docs/spec.md) ersichtlich. Mit unseren Kunden Imagic und PIC Systems wurde abgemacht, dass die "muss" Kriterien bis zum Ende der Projektdauer erfüllt sind.

Zusätzlich zur Applikation wird eine Entwicklerdokumentation abgegeben. Durch diese Dokumentation wird sichergestellt das zukünftige Entwickler das Projekt einfach aufsetzen und sämtliche Tools für die Entwicklung verstehen.

Eine Benutzerdokumentation ist nicht vorgesehen, da die Software von IMS Kunden ohne Schulung bedienbar sein sollte. 

### Kostenvorgabe

Das Projekt wird von der Firma Imagic AG und PIC Systems AG finanziell unterstützt. Sämtliche Ausgaben werden erst nach Absprache getätigt.

## Projektorganisation

Unsere Auftraggeber ist sowohl die Imagic AG wie auch die PIC Systems AG. Imagic AG beauftragt uns eine möglichst generische Lösung für sämtliche Einsatzbereiche zu entwicklen, während unsere enge Zusammenarbeit mit PIC Systems AG sicherstellt dass der Mobile Client für den täglichen Einsatz im Polizeibereich geeignet sein wird.

### Ansprechpartner
Folgende Ansprechpartner stehen während dem Projekt zur Verfügung:

| Name        | Firma | Funktion |
| ------------- |-------------|-------------|
| Urs Gomez| Imagic Bildverarbeitung AG | Anforderungen Imagic AG |
| Marcel Bachmann| PIC Systems AG | Anforderungen PIC System AG |
| Roland Weber| Ergon AG | Betreuer Masterarbeit |
| Susanne Rigling | HSR | Information Masterarbeit |

### Stakeholder
![Stakeholder](docs/images/stakeholderdiagram.png)

Nebst dem Imagic IMS selber unterscheiden wir generell vier Stakeholdergruppen:
- **IMS Kunden**: Sie benutzen das Imagic IMS und ziehen daraus ihren Businessnutzen. Ihre Hauptmotivation ist die Möglichkeit mit ihren mobilen Geräten Bilder, Videos und andere Daten im Imagic IMS abzuspeichern.
  - **Benutzer**: Sie arbeiten mit dem Imagic IMS. Ihre Hauptmotivation ist die Erleichterung ihres Arbeitsalltags.
  - **Betreiber IT-Infrastruktur**: Sie haben die Verantwortung für die Sicherheit und Verfügbarkeit der IT beim IMS Kunden. Ihre Hauptmotivation ist die gute Verwaltbarkeit des Mobile Client z.B. mit einer Mobile Device Management Software.
- **Imagic AG**: Sie entwickeln, verkaufen und supporten das Imagic IMS für Kunden und Partner wie z.B. PIC Systems. Ihre Hauptmotivation ist die Erweiterung ihres Produktportfolios um eine einfache Möglichkeit Daten von mobilen Geräten in das Imagic IMS zu speichern. 
  - **IMS Verkäufer**: Sie beraten, verkaufen und gestalten die Weiterentwicklung des Imagic IMS. Ihre Hauptmotivation ist dem Kunden eine überzeugende Lösung anbieten zu können.
  - **IMS Entwickler**: Sie entwickeln die Software. Ihre Hauptmotivation ist eine qualitativ hochwertige Codebasis.
  - **IMS Support-Abteilung**: Sie stehen den Kunden oder Partnern bei Problemen zur Seite. Ihre Hauptmotivation ist eine reibungslose Installation der Software und gute Diagnosemöglichkeit bei Problemen.
- **PIC Systems**: Sie passen das Imagic IMS an die speziellen Bedürfnisse im Polizeibereich an und supporten das Imagic IMS für ihre Kunden. Ihre Hauptmotivation ist das Entwickeln einer Lösung für den Bildupload in das Imagic IMS für den täglichen Polizeieinsatz auf Streife oder im Aussendienst. Sie vertreten auch die rechtlichen Vorgaben und Sicherheitsanforderungen ihrer Kunden. 
  - **IMS Verkäufer**: Sie beraten, verkaufen und gestalten die Weiterentwicklung des Imagic IMS für den Polizeibereich. Ihre Hauptmotivation ist dem Kunden eine überzeugende Lösung anbieten zu können.
  - **Betreiber IMS Instanz**: Sie konfigurieren und pflegen die Installation des Imagic IMS bei ihren Kunden. Ihre Hauptmotivation ist eine reibungslose Funktionsweise mit dem Imagic IMS Server.
- **Stores**: Sie prüfen und publizieren Apps und erlauben damit den IMS Kunden auf einfache Weise den Mobile Client auf ihren Geräten zu installieren. Ihre Hauptmotivation ist die Qualität und Sicherheit ihrer Plattform sicherzustellen.


## Kontextdiagramm
![Kontextdiagramm](docs/images/Kontextdiagram_IMSmobileClient.png)
Das Kontextdiagramm zeigt auf, dass sich der Mobile Client mit mehreren Umgebungskomponenten austauscht. Er wird durch den Betreiber oder durch ein Mobile Device Management System (MDM) mit Hilfe von Konfigurationsdateien parametrisiert. Lokale Einstellungen kann der Benutzer selber vornehmen. Die Mediendaten (Bilder, Filme) werden durch die Galerie, Kamera oder durch eine externe Applikation bereitgestellt. Die externe Applikation kann ausserdem Daten für eine Eintragsidentifikation mitschicken. Der Benutzer wählt die Mediendaten aus und schickt sie mit Feldinformationen versehen weiter über den Mobile Client an die REST-Schnittstelle. Die REST-Schnittstelle bietet ausserdem Daten zur Navigation und Strukturierung für eine korrekten Datenablage im IMS Server.

## Personas / Test Accounts

Um ein besseres Bild der Benutzer des Mobile Clients zu erhalten und auch um mit verschiedenen Benutzern zu testen wurden Personas erstellt. Diese Accounts existieren auf dem Testserver und man kann sich mit dem aufgelisteten Username und Password einloggen.

| Vorname | Nachname   | Firma                    | Funktion                   | Archive                    | Gruppen                | Username | Password    |
|---------|------------|--------------------------|----------------------------|----------------------------|------------------------|----------|-------------|
| Luca    | Habbicht   | Imagic AG                | IMS Verkäufer Medizin      | ims_med_test               | Verkauf                | luca     | freshwinter |
| Petko   | Atanasov   | Imagic AG                | Support / Installation IMS | ims_med_test, workflow_db1 | Betrieb, Administrator | petko    | crazybone   |
| Getraud | Schuttmann | Picsystem AG             | Betreiber IMS Instanz      | workflow_db1               | Betrieb, Administrator | getraud  | keenbird    |
| Mia     | Giese      | Kantonspolizei | Detektivin Einbruch        | workflow_db1               | Upload_Benutzer        | mia      | bigshape    |
| Lorenz  | Mayer      | Kantonspolizei | Polizist in Ausbildung     | workflow_db1               | Ansicht_Benutzer       | lorenz   | whiteplant  |
| Jožica  | Grigorov   | Kantonspolizei | Leitung Polizeikorps       | workflow_db1               | Betrieb, Administrator | jožica   | megagame    |
| Felizia | Montera    | Kantonspolizei | Innendienst                | workflow_db1               | Nicht_App_Benutzer     | felizia  | graypaper   |

Die Personas sind verschiedenen Gruppen zugeteilt, welche wiederum unterschiedliche Berechtigungen haben.

| IMS Gruppe         | Administrator | Bilder Upload | Fälle erstellen | Fälle ansehen | Mobile Client benutzen |
|--------------------|---------------|---------------|-----------------|---------------|------------------------|
| Betrieb            | Ja            | Ja            | Ja              | Ja            | Ja                     |
| Verkauf            | Nein          | Ja            | Ja              | Ja            | Ja                     |
| Upload_Benutzer    | Nein          | Ja            | Ja              | Ja            | Ja                     |
| Ansicht_Benutzer   | Nein          | Nein          | Nein            | Ja            | Ja                     |
| Nicht_App_Benutzer | Nein          | Nein          | Nein            | Nein          | Nein                   |

## Risikomanagement

Die Risiken und der Umgang mit Risiken wird durch ein separates Dokument [Risiko Analyse](docs/risikoanalyse.md) beschrieben. 

## Management Abläufe

### Zeitliche Planung
Während der Projektdauer zwischen 15.02.2017 - 28.08.2017 wird das Projekt in 13 Sprints unterteilt. Jeder Sprint hat einen zeitlichen Aufwand von ca. 93 Stunden.

#### Phasen

| Phase        | Beschreibung | Zeitbereich |
| ------------- |-------------|-------------|
| Anforderungsanalyse und Prototype | Sammeln der Anforderungen von Stakeholdern, Evaluation von verschiedenen Cross-Platform Frameworks | 24.02.2017 - 24.03.2017 |
| Design und Architektur | Erstellung von Interaction Design und Architektur der Software. Einrichten der Tools für das gewählte Crossplatformframework| 24.03.2017 - 07.04.2017 |
| Implementierung | Implementierung der Anforderungen. Anpassen des Design, der Archtitektur und Anforderungen wenn Anpassungen nötig sind. Kontakt mit Stakeholder in 2 Wochen Rhythmus| 07.04.2017 - 18.08.2017 |
| Abschluss und Übergabe | Abschliessen der Dokumentation für Abgabe des Projekts, Übergabe des Projekts an Imagic | 18.08.2017 - 28.08.2017 |
| Präsentation | Vorbereitung und Durchführung der öffentlichen Präsentation | 28.08.2017 - 04.09.2017 |

![Projekt Phasen](docs/images/Projektphasen.png)

## Infrastruktur
Um unabhängig von der Imagic AG Infrastruktur zu sein haben wir uns entschieden auf einer virtuellen Maschine der HSR einen eigenen Demo Imagic IMS Server zu installieren. Die IMS REST API wird gegen aussen verschlüsselt durch dem [Caddy Webserver](https://caddyserver.com/) als Reverse Proxy bereitgestellt. So erhalten wir mit minimalem Aufwand eine Umgebung ähnlich wie wir sie bei IMS Kunden erwarten würden sobald sie die IMS REST API für den mobilen Einsatz freischalten würden. Mit der Demo-Installation erhalten wir auch vorgefertigte Beispielstrukturen inkl. Daten der Bereiche Medizin, Biochemie, Industrie und Polizei.

Für die Versionsverwaltung des Quellcodes, aller projektrelevanten Dokumente, für das Issue-Tracking sowie für Reviews von Quellcode und Dokumenten nutzen wir die Plattform von GitHub.

## Qualitätsmassnahmen

Unsere Qualitätsmassnahmen umfassen folgende Punkte:

| Massnahme                                                 | Zeitraum                                   | Typ             | Ziel
| --------------------------------------------------------- | ------------------------------------------ | --------------- | ----
| Erfassen sämtlicher Aufgaben als Issues                   | Gesamte Projektdauer                       | organisatorisch | Übersicht und Nachverfolgbarkeit der Tätigkeiten
| Mind. ein Review nötig vor dem mergen eines Pull Requests | Gesamte Projektdauer (Ausser bei Prototyp) | analytisch      | Qualität des Quellcodes sicherstellen und Verteilung von Know-How
| Reviews priorisieren vor neuen Arbeiten                   | Gesamte Projektdauer (Ausser bei Prototyp) | organisatorisch |  Frühzeitige Verifikation des Quellcodes
| Bau mehrerer Prototypen mit unterschiedlichen Frameworks  | Anforderungsanalyse und Prototype          | konstruktiv     | Technische Risiken ausschliessen
| Product Backlog                                           | Gesamte Projektdauer                       | organisatorisch | Priorisierung der Aufgaben
| Sprint Reviews                                            | Gesamte Projektdauer                       | organisatorisch | Prüfung auf Akzeptanz der Stakeholder
| Sprint Retrospektiven                                     | Gesamte Projektdauer                       | organisatorisch | Kontinuierliche Verbesserung der Arbeitsweise
| Definition of Done                                        | Ab Phase Implementierung                   | organisatorisch | Einigkeit über Qualitätsanforderungen einer Aufgabe
| Anforderungen unter Test stellen                          | Ab Phase Implementierung                   | konstruktiv     | Sicherstellung der Funktionsweise
| Defects unter Test stellen                                | Ab Phase Implementierung                   | konstruktiv     | Regressionen vermeiden
| End to End Tests                                          | Ab Phase Implementierung                   | konstruktiv     | Funktion der Module untereinander sicherstellen
| Unit Tests                                                | Ab Phase Implementierung                   | konstruktiv     | Architektureinhaltung und Dokumentation
| Pflegen eines Glossars                                    | Gesamte Projektdauer                       | organisatorisch | Missverständnisse vermeiden
| Quellcode und Dokumentations unter Versionsverwaltung     | Gesamte Projektdauer                       | organisatorisch | Änderungskontrolle und Nachverfolgbarkeit
| Wireframes                                                | Gesamte Projektdauer (Ausser bei Prototyp) | analytisch      | Prüfung auf Akzeptanz der Stakeholder
| Story Map                                                 | Gesamte Projektdauer (Ausser bei Prototyp) | organisatorisch | Übersicht behalten

### Framework
Für die Entwicklung der Software benutzen wir das Framework [Ionic 2](http://ionicframework.com/docs/).
Die Anforderungen an das Framework wurden in einem speziell dafür geschaffenen [Anforderungskatalog](docs/frameworkanforderungen.md) festgehalten. Drei Prototypen wurden erstellt und gegen die Anforderungen geprüft. Die Auswahl des Frameworks kann im Dokument [Framework Entscheid](docs/Frameworkentscheid.md) nachgelesen werden.  

| Framework   | Prototype   |
|---|---|
| Ionic 2  | https://github.com/IMSmobile/ionic2-prototype   |
| Xamarin  | https://github.com/IMSmobile/XamarinPrototype  |
| React Native | https://github.com/IMSmobile/rn-prototype   |

                    

### Dokumentation
Sämtliche Dokumentationen stehen im öffentlich Zugänglichen [GitHub Repository](https://github.com/IMSmobile/app/) zur Verfügung. Wie auch beim Quellcode werden allen Änderungen an einem Dokument von mindestens einer Person mithilfe eines Reviews überprüft.

### Projektmanagement
Sämtliche Aufgaben werden als Issues im [GitHub Repository](https://github.com/IMSmobile/app/issues) erfasst und erscheinen automatisch auf dem [Waffle Kanbanboard](https://waffle.io/IMSmobile/app) in der Spalte *Backlog*. Während dem Sprint Planning ordnen und schätzen wir alle Issues im Waffle und versehen sie mit Labels um die Quelle und Art der Aufgabe zu deklarieren. Anschliessend ziehen wir die Issues, für welche wir uns bis zum nächsten Sprint zur Umsetzung verpflichten in die Spalte *Sprint Backlog*.

Unsere Arbeitsergebnisse werden über einen GitHub Pull Request abgeliefert. Im Kommentar des Pull Requests referenzieren wir eines oder mehrere Issues welche mit damit abgeschlossen sind. Damit werden die verknüpften Issues auf dem Kanbanboard automatisch in die Spalte *Needs Review* verschoben und es ist für alle im Team ersichtlich dass ein reviewbares Arbeitsergebnis vorliegt.

Nach Abschluss des Reviews wird der Pull Request mit einem Merge in den *master Branch* abgeschlossen und das Issue wird automatisch in die Spalte *Done* verschoben.

Am Sprintende werden die Issues in der Spalte *Done* kurz besprochen und über die Waffle Archivfunktion auf dem Kanbanboard ausgeblendet.

In der Sprint Retrospektive arbeiten wir mit dem [Fun Retro Board](http://funretro.github.io/distributed/) um eine kontinuierliche Verbesserung unserer Arbeitsweise zu erreichen.

Dank dem [Burnup Chart](https://docs.google.com/spreadsheets/d/1xm9ytSJTCfuZGIuy3rtBODxPf5nHPiAcZkGWlJf7iIY/edit?usp=sharing) können wir laufend eine Aussage darüber machen was wir bis Projektende voraussichtlich erreichen werden resp. für welche Aufgaben keine Zeit mehr bleiben wird. Dies hilft uns auch zusammen mit den Stakeholdern die verbleibenden Aufgaben richtig zu priorisieren.

### Entwicklung

Das Projekt wird als Open Source Software unter der MIT Lizenz entwickelt. Der Source Code steht in einem öffentlich zugänglichen [GitHub Repository](https://github.com/IMSmobile/app/) zur Verfügung.

#### Entwicklungs Setup
Dieses Kapitel beschreibt die Installation um mit Ionic zu arbeiten.
##### Initialer Setup
- Install Ionic and Cordova according to the [installation documentation](http://ionicframework.com/docs/intro/installation/)
- [Clone git repository](https://help.github.com/articles/cloning-a-repository/)
```bash
git clone https://github.com/IMSmobile/app.git
```
- Download npm dependencies
```bash
npm install
```
- Test installation
```bash
ionic serve
```

##### IMS Rest Konfiguration
Damit der Mobile Client mit einem Imagic IMS funktioniert muss mindestens ein Filter mit dem Namen **IMS_Mobile_Client** existieren.  

##### Entwicklungsumgebung
Zur Entwicklung von Ionic brauchen wir [Visual Studio Code](https://code.visualstudio.com/).

###### Plugins
Um besser mit Ionic arbeiten müssen folgende Plugins der Entwicklungsumgebung installiert werden.

| Plugin      | Befehl | Beschreibung |
|---------|-------------|--------|
|[Ionic 2 Commands with Snippets](https://marketplace.visualstudio.com/items?itemName=Thavarajan.ionic2) | `ext install ionic2` | Ionic 2 Code Completion       |
| [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) | `ext install debugger-for-chrome` | Javascript und Typescript Debugging via Google Chrome |
|[TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) | `ext install tslint` | Integration des [tslint Linters](#code-guideline) für TypeScript |

**Plugin Installation**: In Visual Studio Code mit Shortcut `Ctrl + P` und dem Befehl (z.B. ext install ionic2) ein Plugin installieren.

###### Debugging
Um eine Ionic App zu debuggen:
1. Chrome schliessen
2. In Visual Studio Code `Ctrl + P` und in Suchfeld: `> Ionic Serve Options` eingeben und ausführen (inklusive `>`)
3. Shortcut `F5` drücken

#### Vorgehen
Um ein rasches Kundenfeedback zu erhalten und damit wir abschlussorientiert arbeiten können, wird das Projekt mit agiler Methoden entwickelt.

Alle Entwickler der Applikation stehen hinter dem [Agilen Manifest](http://agilemanifesto.org/iso/de/manifesto.html).

**Individuen und Interaktionen** mehr als Prozesse und Werkzeuge  
**Funktionierende Software** mehr als umfassende Dokumentation  
**Zusammenarbeit mit dem Kunden** mehr als Vertragsverhandlung  
**Reagieren auf Veränderung** mehr als das Befolgen eines Plans  

Das heisst, obwohl wir die Werte auf der rechten Seite wichtig finden,
schätzen wir die Werte auf der linken Seite höher ein.

Das Prozessvorgehen orientiert sich stark an Scrum. Die meisten Events und Artefakte wurden direkt vom [Scrum Guide](http://www.scrumguides.org/scrum-guide.html) übernommen. Es gibt jedoch Abweichungen bezüglich dem Scrum Team.

#### Events

Wir führen folgende im Scrum enthaltenen Events wiederholt durch. Da wir nicht jeden Tag und auch nicht zur gleichen Zeit am Projekt arbeiten verzichten wir auf das Daily Scrum Meeting. Für die Kommunikation und Statusupdates verwenden wir Slack (Messaging System), welches Schnittstellen zu den gängigen Entwicklerplattformen bereitstellt. Wir sind bedacht, dass wir Probleme und Hindernisse frühzeitig kommunizieren.

| Event        | Beschreibung | Dauer |
| ------------- |-------------|-------------|
| Sprint        | Zeitdauer in welcher fokussiert an einem Ziel gearbeitet wird, welches Nutzen für den Kunden generiert.    | 2 Wochen |
| Sprint Planning| Festlegen der Arbeit für den nächsten Sprint. | 1.5 Stunden |
| Sprint Review| Demonstration der fertigen Inkremente für Stakeholder / Betreuer. | 1 Stunde |
| Sprint Retrospektive| Analyse des letzten Sprints und definieren der geplanten Verbesserungen. | 1 Stunde |

#### Artefakte
Das Product Backlog sowie der Sprint Backlog kann online in einem [Waffle Kanban Board](https://waffle.io/IMSmobile/app) angesehen werden.

| Artefakt | Beschreibung |
| ------------- |-------------|
| Product Backlog  | Anhand der Anforderungsspezifikation und später durch Kundeninput definierte Arbeitspakete|
| Sprint Backlog  | Arbeitspakete welche innerhalb eines Sprints erledigt werden.|

#### Team
Im Gegensatz zu Scrum gibt es keinen Product Owner. Die Arbeit des Product Owners wird von den Teammitgliedern gemeinsam durchgeführt. Die Anforderungen sowie auch die Priorisierung der Arbeiten wird zusammen mit den Stakeholdern definiert.

Auch verzichten wir auf die Rolle des Scrum Master. Probleme und Hindernisse werden jeweils sofort im Slack Chat gemeldet und zusammen angeschaut.

#### Code Reviews

Wir arbeiten nach [GitHub Flow](https://guides.github.com/introduction/flow/) und haben unser Repository so eingestellt dass bei einem Pull Request zwingend ein Review einer zweiten Person nötig ist bevor der Code in den master Branch einfliessen kann.

Bei einem Review möchten wir
- Überprüfen ob alle Punkte der Definition of Done eingehalten wurden
- Den Code und nicht den Autor des Codes kritisieren
- Unsere Kommentare positiv und und lösungsorientiert formulieren
- Mit Geduld und Respekt mit Unwissen umgehen
- Auch Lob auszusprechen um die Arbeit des Anderen wertzuschätzen

Damit die Wartezeit möglichst kurz gehalten wird, haben Reviews von einem Pull Request immer Priorität gegenüber dem Beginn einer neuen Aufgabe. Ausserdem dürfen kleinere Fehler ohne Rücksprache mit dem Autor selbständig vom Reviewer behoben werden.

#### Code Coverage 
Mit Code Coverage können wir sicher stellen, dass der Code in einem Test ausgeführt wurde. Die Code Coverage wird automatisch mit jedem Travis Build ausgeführt und kann danach online in [coveralls](https://coveralls.io/github/IMSmobile/app) angesehen werden. Eine lokale Code Coverage kann mit folgendem Befehl ausgeführt werden.
```shell
npm run test-coverage
```


#### Code Guideline

Mit [codelyzer](https://github.com/mgechev/codelyzer) und [tslint](https://palantir.github.io/tslint/) wird der Quellcode automatisch gegen Code Guidelines geprüft. Das [default Ruleset für Guidelines](https://github.com/driftyco/tslint-ionic-rules) vom Ionic Team wurde als Standard übernommen und um weitere Rules erweitetert, um eine höhere Codequalität zu erreichen.

Mit folgendem Befehl kann eine Prüfung durchgeführt werden.
```shell
npm run lint
```

#### Commit Message Guidelines
Um eine saubere und lesbare Commit History zu erhalten verwenden wir Commit Message Guidelines. Diese Guidelines wurden von den [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) übernommen und angepasst.
Die genauen Commit Regeln werden in der [Definition of Done](CONTRIBUTING.md) beschrieben.

### Testing
Um eine hohe Qualität zu erreichen und um Fehler nicht zu wiederholen, werden alle Anforderung und Defects unter Tests gestellt. Automatisierte Tests sind zu bevorzugen da diese ohne menschlichen Aufwand immer wieder ausgeführt werden können. Ist ein automatisierter Test nicht möglich oder zu komplex werden manuelle Test Cases erstellt. Auch für die wichtigsten Smoke Tests werden manuelle Testcases geschrieben.

Bei jedem Release müssen alle automatisierten und manuellen Tests durchgeführt werden. Gibt es Fehler muss diskutiert werden, ob diese als Showstopper einen Release verhindern. Falls die Fehler keinen Release verhindern müssen sie in den Release Notes beschrieben werden.

#### Jasmine
Um automatisierte Tests zu schreiben brauchen wir das JavaScript Framework [jasmine](https://jasmine.github.io/).

#### Karma

Um automatisierte Tests auszuführen benutzen wir das Framework  [Karma](https://karma-runner.github.io/1.0/index.html). Diese Tool startet einen Webbrowser (Google Chrome) und führt die JavaScript Tests direkt auf dem Webbrowser aus. Dort wird auch direkt das Resultat der Tests dargestellt. Zudem erkennt Karma Codeänderungen und führt im Hintergrund alle benötigten Tests automatisch aus.

#### Unit Testing
Unit Tests dienen dazu sicherzustellen dass eine Klasse modular gebaut ist und wiederverwendet werden kann. Zudem dienen Unit Tests als Dokumentation der Klasse. Das Ausführen aller Unit Tests darf nicht länger als 30 Sekunden dauern.

Mit folgendem Befehl können Unit Tests ausgeführt werden.
```shell
npm test
```

Hier ein abstraktes Beispiel eines Unit Tests. Weitere Beispiele findet man in der jasmine [Dokumentation](https://jasmine.github.io/2.0/introduction.html)

```javascript
describe("A module ", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  it("contains spec with another expectation", function() {
    expect(true).toBe(true);
  });
});
```

#### End to End Testing
Bei End to End Testing werden Anforderungen automatisiert getestet. Es wird sichergestellt dass die Integration und Zusammenarbeit der verschiedenen Komponenten funktioniert. Diese Tests dauern in der Regel länger und sollen von einem Continuous Integration Server automatisiert ausgeführt werden.

Mit folgendem Befehl können alle End to End Tests ausgeführt werden.

```shell
npm run e2e
```

*TODO Example, Description Integration Testing with Framework*

#### Build Testing
Mit Build Testing stellen wir sicher dass unsere Software in ein gültiges Paketformat (`.ipa` oder `.apk`) für Smartphones umgewandelt werden kann. Dazu verwenden wir den Service [Ionic Package](https://docs.ionic.io/services/package/).

Mit folgenden Befehlen kann ein Build für Android sowie iOS gestartet und verifiziert werden:

```shell
ionic package build android --noresources --profile dev
ionic package build ios --noresources --profile dev
ionic package list
```

#### Continuous Integration
Mit der Hilfe von Travis CI wird nach einem Push auf GitHub automatisch eine Continuous Integration durchgeführt. Diese umfasst das Durchführen von Unit Tests, End to End Test, Linterüberprüfung, Code Coverage und einen automatischen Build für iOS und Android. Im Falle eines Pullrequests wird zusätzlich zum Push eine mit dem Masterbranch zusammengemergte Version getestet. Nur wenn sämtliche Tests ohne Fehler durchgeführt wurden darf der Pullrequest gemerged werden.  

Das Ergebnis der Continuous Integration wird grafisch in GitHub sowie auf unserem Kanbanboard angezeigt. Bei Bedarf kann auch der Log der Tests auf der Travis-Website eingesehen werden.

Dank dieses Tools ist es möglich, eine stabile und unabhängige Testumgebung zu entwickeln und mit wenig Aufwand zu betreiben. Sie kombiniert die Test mit einem automatischen Build und nimmt durch die Automatisierung viele manuelle Arbeitsschritte ab.

#### Manual Testing
Nicht alle Fehler können durch Unit und End to End Testing abgesichert werden. Für eine Prüfung der Darstellung auf den Referenzgeräten im Vergleich zu den Wireframes sind noch immer manuelle Tests nötig.

Um während der Entwicklng einen raschen Test-Zyklus auf iOS-Geräten zu erreichen setzen wir den Service [Ionic View](http://view.ionic.io/) ein. Mit folgenden Befehlen kann die Software für Ionic View paketiert und hochgeladen werden:
```shell
npm run ionic:build
ionic upload
```
Anschliessend kann die soeben hochgeladene Software-Version sofort innerhalb des Ionic View auf einem Smartphone überprüft werden.

Mit dokumentierten manuellen Test Cases, welche wir vor jedem Sprint-Review und vor jedem Release durchführen, möchten wir die die Funktion aller bereits implementierten Muss-Anforderungen sicherstellen.

*TODO Example Manual Test Case.*

### Releasing
Um rasch neue Versionen des Clients bereitstellen zu können setzen wir auf die standardisierte Versionierung mit [Semantic Versioning](http://semver.org/) sowie die automatisierte Erstellung von Release Notes mit [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog).

Dabei wird in einem ersten Schritt die Relevanz der Änderung anhand des [Commit Message Formats](#commit-message-guidelines) beurteilt und die Versionsnummer entsprechend erhöht. Anschliessend werden die Release Notes generiert und der Release freigegeben.

Für die [Versionierung](#versionierung) relevant sind nur Commit Messages vom [Typ](CONTRIBUTING.md#type) `fix`, `feature` oder `perf` sowie Breaking Changes. Es ist Aufgabe des Reviewers nach dem mergen solcher Pull Requests die Erstellung eines neuen Releases anzustossen. Dabei kreiert er einen weiteren Pull Request in dem sich die neue Versionsnummer, eine Markierung (`tag`) für die Versionsverwaltung sowie die aktualisierte Sammlung aller Release Notes ([`CHANGELOG.md`](CHANGELOG.md)) befindet.

Anschliessend wird dieser zweite "Release Pull Request" durch einen weiteren Reviewer beurteilt und gemerged. Dessen Aufgabe ist es wiederum den Release auf GitHub bereitzustellen.

### Versionierung
Eine Version nach Semantic Versioning besteht aus den drei Komponenten _MAJOR_, _MINOR_ und _PATCH_ welche je nach Commit Message Typ inkrementiert werden.

| Versionskomponente | Commit Message Typ | Beispiel
| ------------------ | ------------------ | ---------
| _MAJOR_ | Breaking Changes | Neue Anforderungen an die Version des IMS Servers 
| _MINOR_ | `feature`        | Neu lassen sich auch Videos hochladen 
| _PATCH_ | `fix`            | Fehlerbehebung beim Upload grosser Bilder

### Wireframes
Mit Hilfe von Wireframes skizzieren wir die Benutzeroberfläche und stellen die Abläufe dar. Sie dienen als Basis für die Entwicklung des User Interface und der Navigation zwischen den verschiedenen Screens. Um unsere Wireframes interaktiv bedienbar zu machen benutzen wir [NinjaMock](https://ninjamock.com).

### Story Map
Aus den Anforderungen und dem laufenden Feedback der Stakeholder entstehen User-Storys welche wir nach Themen gruppiert als Kärtchen auf der Story Map auslegen. Während dem Sprint Review zeigen wir jeweils den aktuellen Stand des Projekts bezogen auf die User-Storys.

## Quellen
Icons von https://icons8.com/
