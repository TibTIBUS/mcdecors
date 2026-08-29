"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function DemoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(true), 4500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="demo-dialog" aria-describedby="demo-description">
        <DialogHeader>
          <div className="demo-kicker">Une création Localia</div>
          <DialogTitle className="demo-title">👋 Bonjour Maxime,</DialogTitle>
          <DialogDescription id="demo-description" className="demo-description">
            Ce site a été conçu à titre de démonstration, spécialement pour <strong>MC DÉCORS</strong>.
            Il n’a pas vocation à rester en ligne sous cette forme — dites-moi si vous souhaitez
            qu’on le mette en place pour de bon, avec votre propre nom de domaine
            (exemple : <strong>mcdecors.fr</strong>).
          </DialogDescription>
        </DialogHeader>

        <div className="demo-actions">
          <a
            className="demo-button demo-button-primary"
            href="mailto:gestion.localia@gmail.com?subject=MC%20D%C3%89CORS%20%E2%80%94%20le%20site%20vous%20pla%C3%AEt%20%3F"
          >
            <Mail size={18} />
            Écrire à Thibaut
          </a>
          <a
            className="demo-button demo-button-secondary"
            href="https://localiapro.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Découvrir les offres Localia
            <ExternalLink size={17} />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
