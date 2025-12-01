import React from "react";

const ConfidentialitePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center p-6 md:p-12">
      {/* Espace pour le logo */}
      <div className="mb-6">
        <img src="/logoTS2.png" alt="TechServices" className="w-16" />
      </div>

      <div className="max-w-5xl w-full bg-white shadow-md rounded-lg p-6 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: "#068bbf" }}>
          Conditions Générales d'Utilisation et Contrat de Service
        </h1>
        <p className="text-sm text-right text-gray-600 mb-6">Dernière mise à jour : 07 octobre 2025</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 1 - Objet du Contrat</h2>
          <p>
            Les présentes Conditions Générales d’Utilisation (Confidentialite) ont pour objet
            l’encadrement juridique de l’utilisation de l’application TechServices.
            Ce contrat est conclu entre le gérant de l’application la société SAHEL BTP (ci-après « l’entreprise »)
            et toute personne physique ou morale souhaitant accéder à l’application et à ses services (ci-après « Utilisateur »).
            L’accès à l’application vaut acceptation des présentes conditions.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 2 - Mentions légales</h2>
          <p>
            Pour les personnes morales :
            L’application TechServices est éditée par la société Sahel BTP SARL dont le siège social est situé à Douala, quartier Deido – Grand Moulin.
            La société est représentée par Sieur Nadji Olivier Moussa, CNI N° 117012029 à LT02.
          </p>
          <p className="mt-2">
            Pour les personnes physiques :
            L’application TechServices est éditée par Sieur Nadji Olivier Moussa, CNI N° 117012029 à LT02, domicilié à Douala, Cameroun.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 3 - Acceptation des conditions</h2>
          <p>
            TechServices est une application mobile développée par Sahel BTP, accessible depuis des supports numériques (smartphones, tablettes, ordinateurs) et visant à mettre en relation les acteurs du secteur BTP avec leurs clients ou partenaires.
            L’utilisation de la Plateforme implique l’acceptation pleine et entière des présentes Confidentialite. Toute utilisation vaut acceptation sans réserve.
            L’Utilisateur déclare avoir la capacité juridique pour contracter ; les mineurs doivent obtenir l’autorisation de leurs représentants légaux.
          </p>
          <p className="mt-2">
            SAHEL BTP se réserve le droit de modifier ou de mettre fin à une caractéristique de TechServices (contenu, horaires, équipements nécessaires, etc.).
            L’Utilisateur reconnaît avoir lu, compris et accepté l’intégralité des Confidentialite avant toute utilisation de la Plateforme.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 4 - Accès et gratuité de la plateforme</h2>
          <h3 className="font-semibold mt-2">4.1 - Accès aux services</h3>
          <p>
            L’utilisateur doit être inscrit pour accéder aux services. Processus d’inscription :
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>
              Clients : fournir des informations personnelles exactes, créer un identifiant et mot de passe, accepter les Confidentialite et la Politique de Confidentialité, vérifier email/téléphone.
            </li>
            <li>
              Prestataires : fournir informations légales, justifier qualifications, soumettre documents d’identification (RCCM, CNI, attestations), accepter les Confidentialite spécifiques aux prestataires.
            </li>
          </ul>
          <p className="mt-2">
            TechServices se réserve le droit de vérifier les informations et de demander des justificatifs complémentaires. L’Utilisateur est responsable de la confidentialité de ses identifiants.
            Chaque Utilisateur ne peut créer qu’un seul compte ; la création de comptes multiples peut entraîner suspension.
          </p>

          <h3 className="font-semibold mt-4">4.2 - Gratuité de la plateforme</h3>
          <p>
            La Plateforme TechServices est actuellement entièrement gratuite pour tous les Utilisateurs : pas de frais d’inscription, d’abonnement ni de commission sur les transactions.
          </p>

          <h3 className="font-semibold mt-4">4.3 - Absence de commission</h3>
          <p>Aucune commission n’est prélevée : le montant payé par le Client est intégralement reversé au Prestataire.</p>

          <h3 className="font-semibold mt-4">4.4 - Fonctionnalités incluses gratuitement</h3>
          <p>Tous les Utilisateurs bénéficient de création/gestion de profil, demandes et devis illimités, messagerie, notation, géolocalisation, notifications, historique, support, outils de gestion et mises à jour régulières.</p>

          <h3 className="font-semibold mt-4">4.5 - Évolution future du modèle</h3>
          <p>TechServices se réserve le droit d’introduire un modèle payant (abonnements, commissions ou fonctionnalités premium).</p>

          <h3 className="font-semibold mt-4">4.6 - Préavis de 90 jours</h3>
          <p>En cas de changement du modèle économique, les Utilisateurs seront informés au minimum 90 jours à l’avance par email, notification et annonce sur le site.</p>

          <h3 className="font-semibold mt-4">4.7 - Droit de refus</h3>
          <p>Les Utilisateurs pourront accepter les nouvelles conditions, continuer avec une version gratuite limitée (si disponible) ou fermer leur compte sans frais.</p>

          <h3 className="font-semibold mt-4">4.8 - Droits acquis</h3>
          <p>Les prestations en cours au moment du changement tarifaire resteront aux conditions initiales jusqu’à leur terme.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 5 - Description des services</h2>

          <h3 className="font-semibold mt-2">5.1 - Services pour les Clients</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Consultation des profils de Prestataires.</li>
            <li>Recherche et filtrage par localisation et spécialité.</li>
            <li>Soumission de demandes avec descriptions et photos.</li>
            <li>Réception et validation de devis, paiement sécurisé, suivi des interventions, notation et accès à l’historique.</li>
          </ul>

          <h3 className="font-semibold mt-4">5.2 - Services pour les Techniciens</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Création et gestion de profil professionnel.</li>
            <li>Réception de notifications de demandes dans leur zone géographique.</li>
            <li>Proposition de devis, gestion du calendrier, réception des paiements via la Plateforme, outils de diagnostic, messagerie.</li>
          </ul>

          <h3 className="font-semibold mt-4">5.3 - Services pour les Quincailleries</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Création de catalogue de produits et gestion des stocks.</li>
            <li>Réception de commandes, livraison ou retrait, facturation et statistiques de ventes.</li>
          </ul>

          <h3 className="font-semibold mt-4">5.4 - Services pour les Entreprises BTP</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Profil entreprise, réception de demandes de chantiers, élaboration de devis complexes, tableaux de bord.</li>
          </ul>

          <h3 className="font-semibold mt-4">5.5 - Services pour les Bureaux d’Étude</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Soumission de plans et études, collaboration, partage de documents sécurisés, facturation.</li>
          </ul>

          <h3 className="font-semibold mt-4">5.6 - Services pour les Laboratoires</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Proposition d’analyses, planification d’interventions, transmission de rapports, certification, archivage.</li>
          </ul>

          <p className="mt-4">Tout utilisateur ayant accès à Internet peut accéder à l’application. Les frais de connexion restent à la charge de l’Utilisateur. Certains services nécessitent une inscription préalable.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 6 - Obligations des Utilisateurs</h2>
          <p>Chaque Utilisateur s’engage à fournir des informations véridiques, à mettre à jour ses données, à utiliser la Plateforme conformément à sa destination et à respecter les droits des autres.</p>
          <p className="mt-2">Il est interdit de publier des contenus illicites, d’utiliser des scripts automatisés sans autorisation, d’usurper une identité, de collecter des données d’autres Utilisateurs ou de harceler.</p>

          <h3 className="font-semibold mt-4">6.1 - Obligations spécifiques des Clients</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Fournir une description précise du service demandé.</li>
            <li>Être disponible pour les échanges et permettre l’accès aux lieux d’intervention dans des conditions sécurisées.</li>
            <li>Effectuer les paiements dans les délais convenus et évaluer les services objectivement.</li>
            <li>Ne pas solliciter des services hors Plateforme après un premier contact.</li>
          </ul>

          <h3 className="font-semibold mt-4">6.2 - Obligations spécifiques des Prestataires</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Détenir qualifications, licences et assurances nécessaires.</li>
            <li>Fournir la preuve des documents à la demande de TechServices.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 7 - Engagement des prestataires</h2>

          <h3 className="font-semibold mt-2">Qualité du service</h3>
          <p>Le prestataire s’engage à exécuter les prestations avec diligence, professionnalisme et conformément aux normes du secteur BTP, en utilisant des matériaux conformes et en respectant les délais.</p>

          <h3 className="font-semibold mt-4">Communication</h3>
          <p>Le prestataire doit répondre aux demandes dans un délai maximum de 48 heures, tenir le Client informé de l’avancement et signaler tout problème ou retard.</p>

          <h3 className="font-semibold mt-4">Devis et facturation</h3>
          <p>Fournir des devis détaillés et transparents, ne pas facturer de frais supplémentaires sans accord écrit, respecter les tarifs annoncés et émettre des factures conformes.</p>

          <h3 className="font-semibold mt-4">Engagement sur la Plateforme</h3>
          <p>Honorer les demandes acceptées, ne pas détourner les Clients hors Plateforme et maintenir un profil à jour.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 8 - Système de paiement et tarification</h2>

          <h3 className="font-semibold mt-2">8.1 - Modalités de paiement</h3>
          <p>Moyens de paiement acceptés : Mobile Money (Orange Money, MTN Mobile Money) et autres moyens locaux intégrés.</p>

          <h3 className="font-semibold mt-4">8.2 - Processus de paiement</h3>
          <p>Le Client valide un devis, effectue le paiement via la Plateforme, le Prestataire réalise la prestation, puis le Client confirme la réalisation satisfaisante avant le transfert des fonds.</p>

          <h3 className="font-semibold mt-4">8.3 - Paiement sécurisé</h3>
          <p>Toutes les transactions sont cryptées et conformes aux normes PCI-DSS. Les informations bancaires ne sont pas stockées sur les serveurs TechServices. Un système de séquestre garantit la sécurité des fonds.</p>

          <h3 className="font-semibold mt-4">8.4 - Délai de rétractation</h3>
          <p>En cas de non-réalisation du service ou de litige, le Client dispose de 48 heures après la date prévue pour signaler un problème.</p>

          <h3 className="font-semibold mt-4">8.5 - Sécurité des transactions</h3>
          <p>Cryptage SSL/TLS, conformité PCI-DSS, surveillance des transactions suspectes et authentification renforcée pour paiements importants.</p>

          <h3 className="font-semibold mt-4">8.6 - Litiges de paiement</h3>
          <p>Le Client peut ouvrir une réclamation dans les 48 heures ; TechServices peut suspendre le versement des fonds pendant l’investigation et proposer une médiation.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 9 - Engagement de transparence</h2>
          <p>TechServices s’engage à informer clairement les Utilisateurs de toute évolution du modèle économique, des raisons des changements et des alternatives proposées.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 10 - Propriété intellectuelle</h2>
          <p>Tous les éléments de la Plateforme (code, design, logos, bases de données, contenus) sont la propriété exclusive de TechServices. L’Utilisateur conserve la propriété des contenus qu’il publie mais accorde à TechServices une licence d’utilisation, mondiale et gratuite, pour le fonctionnement et la promotion de la Plateforme.</p>
          <p className="mt-2">L’Utilisateur s’engage à publier uniquement des contenus dont il détient les droits et à ne pas violer les droits de tiers. Toute violation peut être signalée à l’adresse de contact fournie.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 11 - Protection des données personnelles</h2>
          <p>Responsable du traitement : TechServices. Coordonnées à compléter par l’éditeur.
          </p>

          <h3 className="font-semibold mt-2">Données collectées</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Données d’identification : nom, prénom, email, téléphone, photo de profil (facultative).</li>
            <li>Données professionnelles : raison sociale, RCCM, qualifications, assurances, localisation.</li>
            <li>Données de transaction : historique des demandes, montants, dates.</li>
            <li>Données techniques : IP, appareil, données de navigation, cookies (avec consentement).</li>
          </ul>

          <h3 className="font-semibold mt-4">Finalités</h3>
          <p>Gestion des comptes, mise en relation, traitement des paiements, amélioration du service, sécurité, obligations légales, statistiques anonymisées.</p>

          <h3 className="font-semibold mt-4">Base légale</h3>
          <p>Traitement fondé sur le consentement, l’exécution du contrat, les obligations légales et l’intérêt légitime pour la sécurité.</p>

          <h3 className="font-semibold mt-4">Destinataires et transferts</h3>
          <p>Les données peuvent être communiquées aux autres Utilisateurs (informations de profil), aux prestataires techniques (hébergement, paiement), aux autorités légales et aux partenaires commerciaux avec consentement. Transferts hors du Cameroun possibles avec garanties appropriées.</p>

          <h3 className="font-semibold mt-4">Durée de conservation</h3>
          <p>Comptes actifs : pendant l’utilisation. Après fermeture : 30 jours pour réactivation. Données de transaction : 5 ans. Données de support : 3 ans.</p>

          <h3 className="font-semibold mt-4">Droits des Utilisateurs</h3>
          <p>Accès, rectification, effacement, limitation, portabilité, opposition et retrait du consentement. Pour exercer ces droits : <strong>dpo@techservices.cm</strong>. TechServices répond sous 30 jours maximum.</p>

          <h3 className="font-semibold mt-4">Sécurité et violation</h3>
          <p>Mesures : cryptage SSL/TLS, contrôle d’accès, sauvegardes, surveillance, formation du personnel et audits. En cas de violation présentant un risque, notification à l’autorité compétente sous 72 heures et information des Utilisateurs concernés.</p>

          <h3 className="font-semibold mt-4">Cookies</h3>
          <p>Utilisés pour le fonctionnement, la mémorisation des préférences, l’analyse et la personnalisation (avec consentement). Gérés via les paramètres du navigateur.</p>

          <h3 className="font-semibold mt-4">Réclamation</h3>
          <p>Les Utilisateurs peuvent saisir la Commission Nationale de Protection des Données Personnelles (CNPDP) du Cameroun en cas de litige relatif aux données personnelles.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 12 - Responsabilités et garanties</h2>

          <h3 className="font-semibold mt-2">Responsabilité de TechServices</h3>
          <p>TechServices agit en tant qu’intermédiaire technologique. Elle ne fournit pas directement de services BTP et n’est pas partie aux contrats conclus entre Clients et Prestataires. TechServices s’efforce d’assurer une disponibilité élevée et une assistance réactive mais ne garantit pas l’absence d’erreurs ou de bugs.</p>

          <h3 className="font-semibold mt-4">Limitation de responsabilité</h3>
          <p>TechServices ne peut être tenue responsable de la qualité, conformité ou achèvement des prestations, des litiges entre Utilisateurs, des informations fournies par les Utilisateurs, ni des dommages indirects (perte de profits, clientèle, etc.).</p>

          <h3 className="font-semibold mt-4">Force majeure</h3>
          <p>Événements tels que catastrophes naturelles, pannes d’électricité, actes de guerre, émeutes, grèves ou cyberattaques massives exonèrent TechServices en cas d’impact sur la Plateforme.</p>

          <h3 className="font-semibold mt-4">Plafonnement</h3>
          <p>En cas de responsabilité avérée, l’indemnisation est plafonnée au montant de la transaction concernée (montant à préciser par l’éditeur).</p>

          <h3 className="font-semibold mt-4">Modération et contrôle</h3>
          <p>TechServices modère les contenus mais ne peut garantir un contrôle exhaustif. Elle s’engage toutefois à retirer rapidement tout contenu illicite signalé et à enquêter sur les signalements.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 13 - Responsabilité des prestataires</h2>
          <p>Les Prestataires sont responsables de la qualité, conformité et sécurité de leurs prestations, des dommages causés, des obligations légales et fiscales, ainsi que du respect des délais et garanties contractuelles.</p>

          <h3 className="font-semibold mt-4">Assurances obligatoires</h3>
          <p>Les Prestataires doivent souscrire et maintenir une assurance responsabilité civile professionnelle et, le cas échéant, une assurance décennale pour travaux de construction. Fournir une attestation d’assurance à l’inscription et renouveler annuellement. En cas de défaut : suspension ou résiliation du compte.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 14 - Résiliation et suspension</h2>
          <p>Les Utilisateurs peuvent résilier leur compte à tout moment ; la résiliation entraîne la suppression des données sauf obligations légales. TechServices peut suspendre ou résilier un compte en cas de violation des Confidentialite, d’activité frauduleuse, de non-respect des obligations d’assurance ou de comportement inapproprié.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 15 - Résolution des litiges</h2>
          <p>Une médiation est proposée via la Plateforme en cas de litige. Tout litige non résolu sera soumis aux tribunaux compétents (juridiction à préciser, ex. Douala, Cameroun). Les présentes Confidentialite sont régies par les lois du Cameroun.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 16 - Modifications des conditions</h2>
          <p>TechServices se réserve le droit de modifier les présentes Confidentialite ; les Utilisateurs seront informés par email, notification et annonce sur le site. L’utilisation continue après notification vaut acceptation.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Article 17 - Dispositions générales</h2>
          <p>L’intégralité des Confidentialite combinée à la Politique de Confidentialité constitue l’accord complet entre TechServices et l’Utilisateur. Si une disposition est invalide, les autres restent en vigueur. Les Confidentialite sont rédigées en français ; toute traduction est informative.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2" style={{ color: "#068bbf" }}>Contact & Acceptation</h2>
          <p>Pour toute question ou réclamation : compléter les coordonnées de contact (email, téléphone, adresse) par l’éditeur.
          </p>
          <p className="mt-4">En utilisant TechServices, l’Utilisateur reconnaît avoir lu, compris et accepté sans réserve les présentes Conditions Générales d’Utilisation et Contrat de Service.</p>
        </section>

      </div>
    </div>
  );
};

export default ConfidentialitePage;
