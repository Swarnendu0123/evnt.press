import { Search, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QRCodeSVG } from "qrcode.react";
import Navigation from "@/components/util/Navigation";
import TicketCard from "@/components/event/Ticket";

export default function TicketDashboard() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Navigation />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white h-[calc(100vh-4rem)] p-6">
          <nav className="space-y-6">
            <div>
              
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  Overview
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Calendar
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-primary"
                >
                  Tickets
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Analytics
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-4">
                MANAGEMENT
              </h3>
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start">
                  Team
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Settings
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-end items-center mb-6">
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Ticket Preview */}
              <TicketCard/>

              {/* Event Details */}
              <div className="col-span-1 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Event Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <div className="flex items-center mt-1">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                          <p className="font-medium">Active</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ticket Sales</p>
                        <p className="font-medium">2,145 / 3,000 sold</p>
                        <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                          <div className="bg-primary rounded-full h-2 w-[71%]" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Revenue</p>
                        <p className="font-medium">$64,350</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Quick Actions
                    </h3>
                    <div className="space-y-3">
                      <Button
                        className="w-full justify-start"
                        variant="outline"
                      >
                        Edit Event Details
                      </Button>
                      <Button
                        className="w-full justify-start"
                        variant="outline"
                      >
                        Manage Tickets
                      </Button>
                      <Button
                        className="w-full justify-start"
                        variant="outline"
                      >
                        View Analytics
                      </Button>
               
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
