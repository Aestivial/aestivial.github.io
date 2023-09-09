import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {` 

▄▄▄      ▓█████   ██████ ▄▄▄█████▓ ██▓ ██▒   █▓ ██▓▄▄▄       ██▓    
▒████▄    ▓█   ▀ ▒██    ▒ ▓  ██▒ ▓▒▓██▒▓██░   █▒▓██▒████▄    ▓██▒    
▒██  ▀█▄  ▒███   ░ ▓██▄   ▒ ▓██░ ▒░▒██▒ ▓██  █▒░▒██▒██  ▀█▄  ▒██░    
░██▄▄▄▄██ ▒▓█  ▄   ▒   ██▒░ ▓██▓ ░ ░██░  ▒██ █░░░██░██▄▄▄▄██ ▒██░    
 ▓█   ▓██▒░▒████▒▒██████▒▒  ▒██▒ ░ ░██░   ▒▀█░  ░██░▓█   ▓██▒░██████▒
 ▒▒   ▓▒█░░░ ▒░ ░▒ ▒▓▒ ▒ ░  ▒ ░░   ░▓     ░ ▐░  ░▓  ▒▒   ▓▒█░░ ▒░▓  ░
  ▒   ▒▒ ░ ░ ░  ░░ ░▒  ░ ░    ░     ▒ ░   ░ ░░   ▒ ░ ▒   ▒▒ ░░ ░ ▒  ░
  ░   ▒      ░   ░  ░  ░    ░       ▒ ░     ░░   ▒ ░ ░   ▒     ░ ░   
      ░  ░   ░  ░      ░            ░        ░   ░       ░  ░    ░  ░
                                            ░                        
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`                   
 _____         _   _     _     _ 
 |  _  |___ ___| |_|_|_ _|_|___| |
 |     | -_|_ -|  _| | | | | .'| |
 |__|__|___|___|_| |_|\_/|_|__,|_|
                                  
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 2.1)</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/aestivial/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
