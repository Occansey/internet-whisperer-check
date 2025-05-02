
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

const MobileMenuItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="block py-3 px-4 text-lg text-solio-blue hover:bg-gray-100 rounded-lg"
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-oval font-bold text-xl mr-6 text-solio-blue flex items-center">
          <img src="/lovable-uploads/92dda6b4-a07d-496a-b93b-0702d705cbcb.png" alt="Solio Group" className="h-12 mr-2" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Accueil */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-gray-100">Accueil</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100">Nos Filiales</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100">Gouvernance</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100">Actualités</NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100">Carrières</NavigationMenuTrigger>
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
                <Link to="/contact" className={navigationMenuTriggerStyle() + " hover:bg-gray-100"}>
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px]">
              <div className="flex flex-col gap-4 py-4">
                <h2 className="text-lg font-bold mb-4">Menu</h2>
                
                <div className="border-b pb-2 mb-2">
                  <p className="px-4 text-sm font-semibold text-gray-500 mb-1">Accueil</p>
                  <MobileMenuItem to="/presentation">Présentation du Groupe</MobileMenuItem>
                  <MobileMenuItem to="/mission-vision">Notre mission & vision</MobileMenuItem>
                  <MobileMenuItem to="/culture">Notre culture d'entreprise</MobileMenuItem>
                  <MobileMenuItem to="/activites">Nos domaines d'activité</MobileMenuItem>
                </div>
                
                <div className="border-b pb-2 mb-2">
                  <p className="px-4 text-sm font-semibold text-gray-500 mb-1">Nos Filiales</p>
                  <MobileMenuItem to="https://growth-energy.fr/">Growth Energy</MobileMenuItem>
                  <MobileMenuItem to="https://growth-energy.fr/">GEM E-Mobility</MobileMenuItem>
                  <MobileMenuItem to="https://asking-group.com/fr/">Asking</MobileMenuItem>
                  <MobileMenuItem to="https://www.mfgtech.ca/fr/">MFG Technologies</MobileMenuItem>
                </div>
                
                <div className="border-b pb-2 mb-2">
                  <p className="px-4 text-sm font-semibold text-gray-500 mb-1">Gouvernance</p>
                  <MobileMenuItem to="/gouvernance/comite-executif">Comité exécutif (COMEX)</MobileMenuItem>
                  <MobileMenuItem to="/gouvernance/direction">Équipe de direction</MobileMenuItem>
                </div>
                
                <div className="border-b pb-2 mb-2">
                  <p className="px-4 text-sm font-semibold text-gray-500 mb-1">Actualités</p>
                  <MobileMenuItem to="/actualites/communiques">Communiqués</MobileMenuItem>
                  <MobileMenuItem to="/actualites/projets">Projets en cours</MobileMenuItem>
                  <MobileMenuItem to="/actualites/evenements">Événements à venir</MobileMenuItem>
                </div>
                
                <div className="border-b pb-2 mb-2">
                  <p className="px-4 text-sm font-semibold text-gray-500 mb-1">Carrières</p>
                  <MobileMenuItem to="/carrieres/rejoignez-nous">Rejoignez-nous</MobileMenuItem>
                  <MobileMenuItem to="/carrieres/engagements">Nos engagements RH</MobileMenuItem>
                </div>
                
                <MobileMenuItem to="/contact">Contact</MobileMenuItem>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
