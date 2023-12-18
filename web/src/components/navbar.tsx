import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Navbar() {
  return (
    <div className="flex h-[10vh] w-full items-center justify-between px-8 py-8">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={150} height={150} />
      </Link>
      <Dialog>
        <DialogTrigger>
          <Button size="icon" variant="ghost">
            <InfoIcon size={24} />
          </Button>
        </DialogTrigger>
        <DialogContent className="flex w-full flex-col bg-white text-black">
          <DialogHeader>
            <DialogTitle className="text-xl">How To Use</DialogTitle>
          </DialogHeader>
          <div>
            <p>Upload a file in the specified formats.</p>
            <p>Map your column headers to pre-defined options.</p>
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
