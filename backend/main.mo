import Int "mo:base/Int";
import Nat "mo:base/Nat";

import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";

actor {
  type BlogPost = {
    id: Nat;
    title: Text;
    content: Text;
    timestamp: Int;
  };

  stable var posts : [BlogPost] = [];
  stable var nextId : Nat = 0;

  public func createPost(title: Text, content: Text) : async Nat {
    let id = nextId;
    let post : BlogPost = {
      id;
      title;
      content;
      timestamp = Time.now();
    };
    posts := Array.append(posts, [post]);
    nextId += 1;
    id
  };

  public query func getPosts() : async [BlogPost] {
    posts
  };

  public query func getJobs() : async [Text] {
    [
      "Paladin", "Warrior", "Dark Knight", "Gunbreaker",
      "White Mage", "Scholar", "Astrologian", "Sage",
      "Monk", "Dragoon", "Ninja", "Samurai", "Reaper",
      "Bard", "Machinist", "Dancer",
      "Black Mage", "Summoner", "Red Mage",
      "Blue Mage"
    ]
  };
}
