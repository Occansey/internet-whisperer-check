
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-solio-blue/10 hover:text-solio-blue focus:bg-solio-blue/10 focus:text-solio-blue",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <Link to="/" className="font-oval font-bold text-xl mr-6 text-solio-blue flex items-center">
          <img src="/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png" alt="Solio Group" className="h-12 mr-2" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {/* Accueil */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="/presentation"
                    title="Présentation du Groupe"
                  >
                    Un groupe multidisciplinaire dédié à l'accompagnement des entreprises
                  </ListItem>
                  <ListItem
                    href="/mission-vision"
                    title="Notre mission & vision"
                  >
                    Bâtir un modèle d'entreprise durable et responsable
                  </ListItem>
                  <ListItem
                    href="/culture"
                    title="Notre culture d'entreprise"
                  >
                    L'humain au cœur de notre développement
                  </ListItem>
                  <ListItem
                    href="/activites"
                    title="Nos domaines d'activité"
                  >
                    Transition énergétique et transformation digitale
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Nos Filiales */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Nos Filiales</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    href="https://growth-energy.fr/"
                    title="⚡️ Growth Energy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solutions énergétiques industrielles
                  </ListItem>
                  <ListItem
                    href="https://growth-energy.fr/"
                    title="🚗 GEM E-Mobility"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mobilité électrique pour professionnels
                  </ListItem>
                  <ListItem
                    href="https://asking-group.com/fr/"
                    title="💻 Asking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Transformation numérique & IA
                  </ListItem>
                  <ListItem
                    href="https://www.mfgtech.ca/fr/"
                    title="🏭 MFG Technologies"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intégration ERP & technologies industrielles
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Gouvernance */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Gouvernance</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/gouvernance/comite-executif"
                    title="Comité exécutif (COMEX)"
                  >
                    Direction stratégique et alignement des activités
                  </ListItem>
                  <ListItem
                    href="/gouvernance/direction"
                    title="Équipe de direction"
                  >
                    Expertise sectorielle, vision stratégique et innovation
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Actualités */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Actualités</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/actualites/communiques"
                    title="Communiqués"
                  >
                    Annonces officielles et partenariats
                  </ListItem>
                  <ListItem
                    href="/actualites/projets"
                    title="Projets en cours"
                  >
                    Découvrez nos projets en déploiement
                  </ListItem>
                  <ListItem
                    href="/actualites/evenements"
                    title="Événements à venir"
                  >
                    Forums, conférences et webinaires
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Carrières */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Carrières</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem
                    href="/carrieres/rejoignez-nous"
                    title="Rejoignez-nous"
                  >
                    Opportunités d'emploi et candidatures
                  </ListItem>
                  <ListItem
                    href="/carrieres/engagements"
                    title="Nos engagements RH"
                  >
                    Valeurs et culture d'entreprise
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact - Lien direct */}
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle()}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
