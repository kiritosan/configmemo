## shell

S 删除当前行 并删除前第一个非空字符进入插入模式

D 删除当前行包括当前字符后的所有字符

To get all the terminal control character assignments:

stty -a

c-a c-e

c-f c-b

c-f 配合 zsh 的历史补全使用(不用去按->箭头)

c-u 删除当前行所有命令

c-g 跳过当前命令执行(但屏幕上保留命令)

c-q 暂时清空当前命令,执行下一条命令后自动显示

## nvim

### 操作

<https://einverne.github.io/post/2019/08/fzf-usage.html>

<https://yianwillis.github.io/vimcdoc/doc/index.html#z>

c-u 删除之前的内容到第一个非空字符

<https://sean-warman.medium.com/why-vim-is-better-than-vscode-d09e2355eb37>

operator — text object — motion

Operators are always one of delete, change, visual select and replace.

Text objects are always one of inside or around.

There’s a ton of different motions but we’ll get into that in a second, for now we can think of the motion as a kind of target for the command.

## mappings

```bash
map('v','<A-j>':m⋅.+1<CR>==V')

map('v','<A-k>':m⋅.-2<CR>==V')

z. jump to start
```

## wsl gui map to VcXrv

### wsl settings

```bash
export DISPLAY=`cat /etc/resolv.conf | grep nameserver | awk '{print $2}'`:0
export LIBGL_ALWAYS_INDIRECT=1
```

### alias

```bash
alias vi=nvim
alias vim=nvim
alias ls=exa
```

## support systemd to wsl

### support systemd

```bash
if [[-v WSL_DISTRO_NAME]] then
if (( $+commands[subsystemctl] )); then
if ! subsystemctl is-running; then
sudo subsystemctl start
fi
fi
fi
```

## terminal software

- ghq

- the_silver_searcher(ag) 文本内容搜索

- ripgrep 文本内容搜索

- fd 目录搜索

- fkill

- autojump

- ranger

- hstr

- sxiv

- wal

- rofi

- screenkey

- paru

- yay

- alacritty

- htop

- lazygit

- feh

- xwallpaper

- Rufus -- reinstall system

- fzf (使用安装脚本安装才会有快捷键绑定)

- antigen⋅bundle⋅Aloxaf/fzf-tab
  用 autojump 足够了 如有必要还可以用\*\*<TAB>

- glow markdown viewer

- nnn

- visidata

- antigen

- broot

antigen⋅bundle⋅reobin/typewritten@mai

export⋅TYPEWRITTEN_RELATIVE_PATH="adaptive"

## neovim

skcode

z. jump to start

## dwm

chadwm
