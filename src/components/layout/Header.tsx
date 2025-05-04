
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  const [open, setOpen] = useState(false);
  
  return (
    <Link 
      to={to} 
      className="block py-3 px-4 text-lg text-solio-blue hover:bg-gray-100 rounded-lg"
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="font-oval font-bold text-xl mr-6 text-solio-blue flex items-center">
          <img src="/lovable-uploads/2f77179c-5f56-4952-8e92-625fc37a10e2.png" alt="Solio Group" className="h-16 w-auto mr-2" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block flex-1">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList>
              {/* Accueil */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-gray-100 hover:text-solio-blue data-[state=open]:bg-gray-100 data-[state=open]:text-solio-blue">
                  Accueil
                </NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100 hover:text-solio-blue data-[state=open]:bg-gray-100 data-[state=open]:text-solio-blue">
                  Nos Filiales
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      href="/filiales/growth-energy"
                      title="⚡️ Growth Energy"
                    >
                      Solutions énergétiques industrielles
                    </ListItem>
                    <ListItem
                      href="/filiales/gem-e-mobility"
                      title="🚗 GEM E-Mobility"
                    >
                      Mobilité électrique pour professionnels
                    </ListItem>
                    <ListItem
                      href="/filiales/asking"
                      title="💻 Asking"
                    >
                      Transformation numérique & IA
                    </ListItem>
                    <ListItem
                      href="/filiales/mfg-technologies"
                      title="🏭 MFG Technologies"
                    >
                      Intégration ERP & technologies industrielles
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Gouvernance */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:bg-gray-100 hover:text-solio-blue data-[state=open]:bg-gray-100 data-[state=open]:text-solio-blue">
                  Gouvernance
                </NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100 hover:text-solio-blue data-[state=open]:bg-gray-100 data-[state=open]:text-solio-blue">
                  Actualités
                </NavigationMenuTrigger>
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
                <NavigationMenuTrigger className="hover:bg-gray-100 hover:text-solio-blue data-[state=open]:bg-gray-100 data-[state=open]:text-solio-blue">
                  Carrières
                </NavigationMenuTrigger>
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
                <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "hover:bg-gray-100 hover:text-solio-blue")}>
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
                <Menu className="h-8 w-8" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] overflow-y-auto">
              <div className="flex flex-col gap-4 py-4">
                <h2 className="text-lg font-bold mb-4">Menu</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="accueil">
                    <AccordionTrigger className="hover:no-underline">Accueil</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileMenuItem to="/presentation">Présentation du Groupe</MobileMenuItem>
                        <MobileMenuItem to="/mission-vision">Notre mission & vision</MobileMenuItem>
                        <MobileMenuItem to="/culture">Notre culture d'entreprise</MobileMenuItem>
                        <MobileMenuItem to="/activites">Nos domaines d'activité</MobileMenuItem>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                
                  <AccordionItem value="filiales">
                    <AccordionTrigger className="hover:no-underline">Nos Filiales</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileMenuItem to="/filiales/growth-energy">Growth Energy</MobileMenuItem>
                        <MobileMenuItem to="/filiales/gem-e-mobility">GEM E-Mobility</MobileMenuItem>
                        <MobileMenuItem to="/filiales/asking">Asking</MobileMenuItem>
                        <MobileMenuItem to="/filiales/mfg-technologies">MFG Technologies</MobileMenuItem>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                
                  <AccordionItem value="gouvernance">
                    <AccordionTrigger className="hover:no-underline">Gouvernance</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileMenuItem to="/gouvernance/comite-executif">Comité exécutif (COMEX)</MobileMenuItem>
                        <MobileMenuItem to="/gouvernance/direction">Équipe de direction</MobileMenuItem>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                
                  <AccordionItem value="actualites">
                    <AccordionTrigger className="hover:no-underline">Actualités</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileMenuItem to="/actualites/communiques">Communiqués</MobileMenuItem>
                        <MobileMenuItem to="/actualites/projets">Projets en cours</MobileMenuItem>
                        <MobileMenuItem to="/actualites/evenements">Événements à venir</MobileMenuItem>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                
                  <AccordionItem value="carrieres">
                    <AccordionTrigger className="hover:no-underline">Carrières</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        <MobileMenuItem to="/carrieres/rejoignez-nous">Rejoignez-nous</MobileMenuItem>
                        <MobileMenuItem to="/carrieres/engagements">Nos engagements RH</MobileMenuItem>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="px-1 pt-4">
                  <MobileMenuItem to="/contact">Contact</MobileMenuItem>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
