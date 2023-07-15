import { useI18n } from "@amoutonbrady/solid-i18n";
import { useTranslation } from "../../hooks/useTranslation";
import DefaultLayout from "../../layout/Default";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";

function PrivacyPolicy() {
  const [t, { locale }] = useI18n();
  useTranslation(locale);

  return (
    <DefaultLayout>
      <Hero
        title={t("privacyPolicy.title")}
        align="center"
        className="text-center"
      />

      <Section width="md" py="large" align="center" bg="gray">
        <h2>Datenschutz auf einen Blick</h2>

        <h3>Allgemeine Hinweise</h3>

        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>

        <h3>Datenerfassung auf dieser Website</h3>

        <h4>
          Wer ist verantwortlich für die Datenerfassung auf dieser Website?
        </h4>

        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </p>

        <h3>Wie erfassen wir Ihre Daten?</h3>

        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Andere Daten werden automatisch oder nach Ihrer
          Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
          Das sind vor allem technische Daten (z. B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
          Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>

        <h3>Wofür nutzen wir Ihre Daten?</h3>

        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>

        <h3>Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>

        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        </p>

        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich
          jederzeit an uns wenden.
        </p>

        <h3>Analyse-Tools und Tools von Drittanbietern</h3>

        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit Google Analytics und
          Firebase, unseren Analyseprogrammen. Beide Tools sammeln Daten, die
          uns helfen, das Verhalten unserer Besucher besser zu verstehen und
          unsere Website entsprechend zu verbessern. Google Analytics verwendet
          "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und
          die eine Analyse der Benutzung der Website durch Sie ermöglichen.
          Firebase, eine Entwicklungsumgebung von Google, bietet auch
          Analysefunktionen, mit denen wir das Nutzerverhalten analysieren
          können.
        </p>

        <h3>Hosting und Content Delivery Networks (CDN)</h3>

        <h4>Externes Hosting</h4>

        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln.
        </p>

        <p>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
          gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
          lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

        <p>
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
          Erfüllung seiner Leistungspflichten erforderlich ist und unsere
          Weisungen in Bezug auf diese Daten befolgen.
        </p>

        <p>Wir setzen folgenden Hoster ein:</p>

        <p>
          Google Firebase
          <br />
          Google LLC
          <br />
          1600 Amphitheatre Parkway
          <br />
          Mountain View, CA 94043, USA
        </p>

        <h3>Allgemeine Hinweise und Pflichtinformationen</h3>

        <h4>Datenschutz</h4>

        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>

        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>

        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </p>

        <h3>Hinweis zur verantwortlichen Stelle</h3>

        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>

        <p>
          Dmitrij Kiltau
          <br />
          E-Mail: info@kiltau.com
        </p>

        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>

        <h3>Verwendung von Cookies</h3>

        <p>
          Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die
          auf Ihrem Computer gespeichert werden. Sie dienen dazu, unsere
          Angebote nutzerfreundlicher, effektiver und sicherer zu machen. Die
          meisten der von uns verwendeten Cookies sind so genannte
          "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch
          gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis
          Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser
          beim nächsten Besuch wiederzuerkennen.
        </p>

        <h3>Analysetools</h3>

        <p>
          Unsere Website verwendet Google Analytics und Firebase als
          Analysetools. Diese Tools sammeln Informationen darüber, wie Besucher
          unsere Website nutzen, einschließlich der Anzahl der Besucher, wo die
          Besucher herkommen und welche Seiten sie besucht haben. Diese
          Informationen helfen uns, unsere Website zu verbessern und den
          Besuchern eine bessere Erfahrung zu bieten.
        </p>

        <h3>Online-Werbung und Werbenetzwerke</h3>

        <p>
          Unsere Website verwendet derzeit keine Online-Werbung und ist nicht
          Teil von Werbenetzwerken. Falls wir in Zukunft Online-Werbung
          implementieren, werden wir diese Datenschutzerklärung aktualisieren.
          Bitte beachten Sie, dass, obwohl wir keine Werbenetzwerke nutzen,
          einige der Analysetools, die wir verwenden, wie Google Analytics und
          Firebase, potenziell Daten für Werbezwecke verwenden können. Bitte
          lesen Sie deren Datenschutzrichtlinien für weitere Informationen.
        </p>

        <h3>Datenspeicherung und -sicherheit</h3>

        <p>
          Wir nehmen die Sicherheit Ihrer personenbezogenen Daten sehr ernst.
          Wir haben physische, technische und administrative Maßnahmen
          ergriffen, um Ihre personenbezogenen Daten vor Verlust, Missbrauch und
          unautorisiertem Zugriff, Verwendung, Änderung und Offenlegung zu
          schützen. Alle Informationen, die Sie uns geben, werden auf sicheren
          Servern gespeichert.
        </p>

        <h3>Datenübertragung</h3>

        <p>
          Personenbezogene Daten, die wir sammeln, können in einem Land
          gespeichert und verarbeitet werden, das nicht die Datenschutzgesetze
          Ihres Wohnsitzlandes hat. Wenn wir Ihre personenbezogenen Daten
          außerhalb Ihres Wohnsitzlandes übertragen, treffen wir entsprechende
          Schutzmaßnahmen, um sicherzustellen, dass Ihre personenbezogenen Daten
          gemäß dieser Datenschutzerklärung behandelt werden. Dazu gehört der
          Einsatz von Standardvertragsklauseln, wie sie von der Europäischen
          Kommission genehmigt wurden, und die Sicherstellung, dass die
          Empfänger die gleichen oder ähnliche angemessene Sicherheitsstandards
          einhalten.
        </p>

        <h3>Änderungen der Datenschutzbestimmungen</h3>

        <p>
          Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren.
          Jede Änderung unserer Datenschutzerklärung wird auf dieser Seite
          veröffentlicht. Sie sollten diese Seite regelmäßig besuchen, um
          sicherzustellen, dass Sie die Änderungen verstanden haben.
        </p>

        <small>
          <i>Letzte Änderung: 15.07.2023</i>
        </small>
      </Section>
    </DefaultLayout>
  );
}

export default PrivacyPolicy;
